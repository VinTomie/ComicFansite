exports.list = (req, res) => {
	console.log("we have activated seriesdisplay.js\n");
	db.query('SELECT * FROM Series', (error, results, fields) => 
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
            res.render('seriesdisplay', {data: results});          
        }
	});
	
}