exports.insertcreators = (req, res) => {

  var keys = Object.keys(req.body);
  keys = keys.toString();
  var userid = req.session.userid;
  console.log(userid);
  console.log(keys);

  var some = [];

  

  var search = ('SELECT * FROM favoriteCreators WHERE (user = ?) AND (creator = ?)');
  db.query(search, [userid, keys], (error, results, fields) => {
  	if(error){
  		console.log("Error: ", error); 
  		res.send("error");
  	}
  	else if(results.length > 0) {
  		console.log("That element already exists")
  		res.send("error: you already inserted that");
  	}
  	else {
  		console.log("We found that the element hasn't been inserted yet");
  	}
  });



  var insertion = ('INSERT INTO favoriteCreators VALUES (?, ?)');
  db.query(insertion, [userid, keys], (error, results, fields) => {
  	if(error){
  		console.log("Error: ", error);
  	}
  	else {
  		console.log(results);
  	}
  });	

  var creators = ('SELECT Creators.id, Creators.fname, Creators.lname FROM favoriteCreators JOIN Creators on (Creators.id = favoriteCreators.creator AND favoriteCreators.user = ?)');
  db.query(creators, [userid], (error, results, fields) => {
  	if (error) {
  		console.log("Error: ", error);
  		res.send("error");
  	}
  	else {
  		console.log("We found some dudes");
  		res.render('favoriteCreators', {creators: results, name: req.session.firstname});
  	}
  });







}

