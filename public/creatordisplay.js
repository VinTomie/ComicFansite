exports.list = (req, res) => {
	console.log("we have activated creatordisplay.js\n");
	db.query('SELECT C.* from Creators C Where C.id not in (select creator from favoriteCreators where user = ?)', [req.session.userid], (error, results, fields) => 
	{
		console.log('we did a query');
		if(error) 
		{
            console.log("Error: ",error);
            res.send({
                "code": 400,
                "failed": "Error occurred"
            });
        } else {
            console.log("Results: ",results);
            /*res.send({
                "code": 200,
                "success": "Database successfully logged"
            });*/
            res.render('creatordisplay', {data: results});          
        }
	});
	
}
