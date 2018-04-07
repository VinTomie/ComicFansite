exports.addseries = (req, res) => {
    console.log(req.body);

    var random = Math.random() * 15000;

    var sql = ('SELECT COUNT(*) FROM Series WHERE id = ?', randomnum);
    while (db.query(sql) > 0)
    {
        random = Math.floor(Math.random() * 10000) + 10000;

    }
    const Series = {
        'id': random,
        'title': req.body.sname,
        'descrip': req.body.seriesdescription,
        'thumbnail': null,
        'thumnail_ext': null
    }
    db.query('INSERT INTO Series SET ?', Series, (error, results, fields) => {
        if(error) {
            console.log("Error: ",error);
            res.send({
                "code": 400,
                "failed": "Error occurred"
            });
        } else {

            console.log("Results: ",results);
            /*res.send({
                "code": 200,
                "success": "User successfully signed up"
            });*/
            //res.render('profile.html', {fname: User.fname});
        }
    });
}

exports.addcomic = (req, res) => {
    console.log(req.body);

    var random = Math.random() * 15000;

    var sql = ('SELECT COUNT(*) FROM Comics WHERE id = ?', randomnum);
    while (db.query(sql) > 0)
    {
        random = Math.floor(Math.random() * 10000) + 10000;

    }
    const Comic = {
        'id': random,
        'title': req.body.cname,
        'descrip': req.body.comicdescription,
        'issn': req.body.issn,
        'thumbnail': null,
        'thumnail_ext': null
    }
    db.query('INSERT INTO Comics SET ?', Comic, (error, results, fields) => {
        if(error) {
            console.log("Error: ",error);
            res.send({
                "code": 400,
                "failed": "Error occurred"
            });
        } else {

            console.log("Results: ",results);
            /*res.send({
                "code": 200,
                "success": "User successfully signed up"
            });*/
            //res.render('profile.html', {fname: User.fname});
        }
    });
}

exports.addcreator = (req, res) => {
    console.log(req.body);

    var random = Math.random() * 15000;

    var sql = ('SELECT COUNT(*) FROM Comics WHERE id = ?', randomnum);
    while (db.query(sql) > 0)
    {
        random = Math.floor(Math.random() * 10000) + 10000;

    }
    const Creator = {
        'id': random,
        'fname': req.body.fnamecreat,
        'lname': req.body.lnamecreat,
        'thumbnail': null,
        'thumnail_ext': null
    }
    db.query('INSERT INTO Creators SET ?', Creator, (error, results, fields) => {
        if(error) {
            console.log("Error: ",error);
            res.send({
                "code": 400,
                "failed": "Error occurred"
            });
        } else {

            console.log("Results: ",results);
            /*res.send({
                "code": 200,
                "success": "User successfully signed up"
            });*/
            //res.render('profile.html', {fname: User.fname});
        }
    });
}

exports.addchar = (req, res) => {
    console.log(req.body);

    var random = Math.random() * 15000;

    var sql = ('SELECT COUNT(*) FROM Characters WHERE id = ?', randomnum);
    while (db.query(sql) > 0)
    {
        random = Math.floor(Math.random() * 10000) + 10000;
    }
    const Character = {
        'id': random,
        'cname': req.body.namechar,
        'descrip': req.body.chardescrip,
        'thumbnail': null,
        'thumnail_ext': null
    }
    db.query('INSERT INTO Characters SET ?', Character, (error, results, fields) => {
        if(error) {
            console.log("Error: ",error);
            res.send({
                "code": 400,
                "failed": "Error occurred"
            });
        } else {

            console.log("Results: ",results);
            /*res.send({
                "code": 200,
                "success": "User successfully signed up"
            });*/
            //res.render('profile.html', {fname: User.fname});
        }
    });
}
