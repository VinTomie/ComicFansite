exports.rec = (req, res) => {
	var userid = req.session.userid;

	var recc = ('SELECT distinct Series.* FROM favoriteSeries left join Series on favoriteSeries.series = Series.id WHERE favoriteSeries.user <> ? AND series not in (SELECT series FROM favoriteSeries Where favoriteSeries.user = ?)');
	db.query(recc, [userid, userid], (error, results, fields) => {
		if (error)
		{
			console.log("Error: ", error);
			res.send("error");
		}
		else
		{
			console.log("We have found some things to reccomemend");
			console.log(results);
			console.log(userid);
			res.render("recommendations", {things: results, fname: req.session.firstname});
		}

	});
}