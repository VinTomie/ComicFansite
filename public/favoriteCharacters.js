exports.insertcharacters = (req, res) => {

  var keys = Object.keys(req.body);
  keys = keys.toString();
  var userid = req.session.userid;
  console.log(userid);
  console.log(keys);

  var some = [];

  

  var search = ('SELECT * FROM favoriteCharacters WHERE (user = ?) AND (charID = ?)');
  db.query(search, [userid, keys], (error, results, fields) => {
  	if(error){
  		console.log("Error: ", error); 
  		res.send("error");
  	}
  	else if(results.length > 0) {
  		console.log("That character already exists")
  		res.send("error: you already inserted that");
  	}
  	else {
  		console.log("We found that the character hasn't been inserted yet");
  	}
  });



  var insertion = ('INSERT INTO favoriteCharacters VALUES (?, ?)');
  db.query(insertion, [userid, keys], (error, results, fields) => {
  	if(error){
  		console.log("Error: ", error);
  	}
  	else {
  		console.log(results);
  	}
  });	

  var characters = ('SELECT Characters.id, Characters.cname, Characters.descrip, Characters.thumbnail, Characters.thumbnail_extension FROM favoriteCharacters JOIN Characters on (Characters.id = favoriteCharacters.charID AND favoriteCharacters.user = ?)');
  db.query(characters, [userid], (error, results, fields) => {
  	if (error) {
  		console.log("Error: ", error);
  		res.send("error");
  	}
  	else {
  		console.log("We found some dudes");
  		res.render('favoriteCharacters', {characters: results, name: req.session.firstname});
  	}
  });
}
