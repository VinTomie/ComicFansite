exports.insertcomics = (req, res) => {

  var keys = Object.keys(req.body);
  keys = keys.toString();
  var userid = req.session.userid;
  console.log(userid);
  console.log(keys);

  var some = [];

  

  var search = ('SELECT * FROM favoriteComics WHERE (user = ?) AND (comic = ?)');
  db.query(search, [userid, keys], (error, results, fields) => {
  	if(error){
  		console.log("Error: ", error); 
  		res.send("error");
  	}
  	else if(results.length > 0) {
  		console.log("That comic already exists")
  		res.send("error: you already inserted that");
  	}
  	else {
  		console.log("We found that the comic hasn't been inserted yet");
  	}
  });



  var insertion = ('INSERT INTO favoriteComics VALUES (?, ?)');
  db.query(insertion, [userid, keys], (error, results, fields) => {
  	if(error){
  		console.log("Error: ", error);
  	}
  	else {
  		console.log(results);
  	}
  });	

  var comics = ('SELECT Comics.id, Comics.title, Comics.descrip, Comics.issn, Comics.thumbnail, Comics.thumbnail_extension From favoriteComics Join Comics on (Comics.id = comic AND user = ?)');
  db.query(comics, [userid], (error, results, fields) => {
  	if (error) {
  		console.log("Error: ", error);
  		res.send("error");
  	}
  	else {
  		console.log("We found some dudes");
  		res.render('favoriteComics', {comics: results, name: req.session.firstname});
  	}
  });
}

exports.favorites = (req, res) => {
  var userid = req.session.userid;

  var comics = ('SELECT Comics.id, Comics.title, Comics.descrip, Comics.issn, Comics.thumbnail, Comics.thumbnail_extension From favoriteComics Join Comics on (Comics.id = comic AND user = ?)');
  db.query(comics, [userid], (error, results, fields) => {
    if (error) {
      console.log("Error: ", error);
      res.send("error");
    }
    else {
      console.log("We are rendering the page");
      res.render('favoriteComics', {comics: results, name: req.session.firstname});
    }
  });

}