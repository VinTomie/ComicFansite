var path = require('path');

exports.signup = (req, res) => {
    console.log(req.body);
    const User = {
        'fname': req.body.fname,
        'lname': req.body.lname,
        'pass': req.body.pass,
        'email': req.body.emailsignup
    }
    db.query('INSERT INTO User SET ?', User, (error, results, fields) => {
        if(error) {
            console.log("Error: ",error);
            res.send({
                "code": 400,
                "failed": "Error occurred"
            });
        } else {

            req.session.userid = User.email;
            req.session.firstname = User.fname;

            console.log(req.session.userid);
            console.log(req.session.firstname);

            console.log("Results: ",results);
            /*res.send({
                "code": 200,
                "success": "User successfully signed up"
            });*/
            var top10 = ('SELECT Series.*, count(Series) FROM favoriteSeries right join Series on favoriteSeries.series = Series.id group by series order by count(series) desc limit 10');
                    db.query(top10, (error, results, fields) => {
                        if(error)
                        {
                            res.send("Error: ", error);
                        }
                        else
                        {
                            res.render('profile', {trending: results, fname: req.session.firstname});

                        }

                    });
        }
    });
}

/* Validate user in the database to see if user has signed up already */
exports.login = (req, res) => {
    const email = req.body.emaillogin;
    const password = req.body.pass;

    console.log(email);
    console.log(password);
    db.query('SELECT * FROM User WHERE email = ?', [email], (error, results, fields) => {
        if(error) {
            console.log("Error: ", error);
            res.send({
                "code": 400,
                "failed": "Error occurred"
            })
        } else {
            console.log("Results: ", results);

            
	        var firstname = results[0].fname;

            if(results.length > 0) {
                if(results[0].pass == password) {
                    req.session.userid = email;
                    req.session.firstname = firstname;
                    console.log(req.session.userid);
                    console.log(req.session.firstname);

                    var top10 = ('SELECT Series.*, count(Series) FROM favoriteSeries right join Series on favoriteSeries.series = Series.id group by series order by count(series) desc limit 10');
                    db.query(top10, (error, results, fields) => {
                        if(error)
                        {
                            res.send("Error: ", error);
                        }
                        else
                        {
                            res.render('profile', {trending: results, fname: firstname});

                        }

                    });
                    /*res.send({
                      "code": 200,
                      "success": "Login successful"
                    });*/
                } else {
                	res.sendfile(path.resolve('public/index.html'));
                    /*res.send({
                      "code": 204,
                      "success": "Email and password do not match"
                    });*/
                }
            } else {
            	res.sendfile(path.resolve('public/index.html'));
                /*res.send({
                    "code": 204,
                    "success": "Email doesn't exist"
                });*/
            }
        }
    });
}








/*var express = require('express');


console.log('Made it this far');

//There is a stong possibility that it could just be

if ($_POST['action'] == 'SignUp')
{
	do register stuff
}
else if ($_POST['action'] == 'Login')
{
	do login stuff
}



exports.signup = function(req, res) {
	message = '';
	if ($_POST['action'] == 'SignUp' && req.method == "POST")
	{
		var post = req.body;
		var firstname = post.fname;
		var lastname= post.lname;
		var email = post.email;
		var password = post.pass;

		var sql = "INSERT INTO User(email, fname, lname, pass) VALUES ('"+email+"', '"+fname+"', '"+lname+"', '"+pass+"')";

		var query = db.query(sql, function(err, results, fields) {
			if (error) {
				console.log("Registration failure");
			}
			else
				console.log("Registration Success");
			message = "Succesfully registered an account.";
		});

	}

	else {
		//res.render('index.html')
	}
};



exports.login = function(req, res) {
	var message = '';
	//var sess = req.session;

	if ($_POST['action'] == 'Login' && req.method) == "POST") {
		var post = req.body;
		var email = post.email;
		var pass = post.password;

		var sql = "SELECT * FROM User WHERE email = '"+email+"'' and password = '"+password+"'";
		db.query(sql, function(err, results, fields){
			if(results.length > 0) {
				if (pass == results[0].password && email == results[0].email) {
					message: 'successful'
					//req.session.userID = results[0].email;
					//req.session.user = results[0];
					console.log(results[0].email);
					//res.redirect('profile');
				}
			else {
				message = 'Entered the wrong account information.';
				//res.render('index.html', {message: message});
			}


		});
	}
	else {
		//res.render('index.html', {message: message});
	}

};*/
