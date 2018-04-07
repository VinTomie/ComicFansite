SELECT Creators.id, Creators.fname, Creators.lname
From favoriteCreators
JOIN Creators on (Creators.id = favoriteCreators.creator AND favoriteCreators.user = ?)
