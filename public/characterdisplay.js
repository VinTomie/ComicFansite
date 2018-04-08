exports.list = (req, res) => {
	console.log("we have activated characterdisplay.js\n");
	db.query('SELECT C.* from Characters C Where C.id not in (select charID from favoriteCharacters where user = ?)', [req.session.userid], (error, results, fields) => 
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
            res.render('characterdisplay', {data: results});          
        }
	});
	
}
