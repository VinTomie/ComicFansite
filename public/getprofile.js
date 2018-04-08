exports.profile = (req, res) => {

	var top10 = ('SELECT Series.*, count(Series) FROM favoriteSeries right join Series on favoriteSeries.series = Series.id group by series order by count(series) desc limit 10');
	db.query(top10, (error, results, fields) => {
		if(error)
		{
			res.send("Error :", error);
		}
		else
		{
			res.render('profile', {trending: results, fname: req.session.firstname});
		}

	});
	
}