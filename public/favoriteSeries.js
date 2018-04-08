exports.insertseries = (req, res) => {

  var keys = Object.keys(req.body);
  keys = keys.toString();
  var userid = req.session.userid;
  console.log(userid);
  console.log(keys);

  var some = [];

  

  var search = ('SELECT * FROM favoriteSeries WHERE (user = ?) AND (series = ?)');
  db.query(search, [userid, keys], (error, results, fields) => {
  	if(error){
  		console.log("Error: ", error); 
  		res.send("error");
  	}
  	else if(results.length > 0) {
  		console.log("That series already exists")
  		res.send("error: you already inserted that");
  	}
  	else {
  		console.log("We found that the series hasn't been inserted yet");
  	}
  });



  var insertion = ('INSERT INTO favoriteSeries VALUES (?, ?)');
  db.query(insertion, [userid, keys], (error, results, fields) => {
  	if(error){
  		console.log("Error: ", error);
  	}
  	else {
  		console.log(results);
  	}
  });	

  var Series = ('SELECT Series.id, Series.title, Series.description, Series.thumbnail, Series.extension FROM favoriteSeries JOIN Series on (Series.id = series AND user = ?)');
  db.query(Series, [userid], (error, results, fields) => {
  	if (error) {
  		console.log("Error: ", error);
  		res.send("error");
  	}
  	else {
  		console.log("We found some dudes");
  		res.render('favoriteSeries', {series: results, name: req.session.firstname});
  	}
  });
}

exports.favorites = (req, res) => {
  var userid = req.session.userid;

  var Series = ('SELECT Series.id, Series.title, Series.description, Series.thumbnail, Series.extension FROM favoriteSeries JOIN Series on (Series.id = series AND user = ?)');
  db.query(Series, [userid], (error, results, fields) => {
    if (error) {
      console.log("Error: ", error);
      res.send("error");
    }
    else {
      console.log("We are rendering the page");
      res.render('favoriteSeries', {series: results, name: req.session.firstname});
    }
  });

}
