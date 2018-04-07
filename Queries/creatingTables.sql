Use yjq87qtadsz6vybx;


CREATE TABLE User
(
	email varchar(50) primary key,
    fname varchar(30),
    lname varchar(30),
    pass varchar(30)
);

CREATE TABLE Comics
(
	comicID int primary key,
    title varchar(40),
    descrip varchar(1000),
    issueNum varchar(3),
    thmbnl varchar(1000)
    );

CREATE TABLE Characters
(
	charID char(255) primary key,
    charName char(255), 
    descrip char(2555),
    thumbnail char(255)
);

CREATE TABLE Creators
(
	creatorID char(255) primary key,
    fname char(255),
    lname char(255),
    dateofbirth int
);


CREATE TABLE favoriteComics
(
	email varchar(50),
    comicID int,
    FOREIGN KEY (email) references User(email)
		ON DELETE SET NULL
		ON UPDATE CASCADE,
    
    FOREIGN KEY (comicID) references Comics(comicID)
		ON DELETE SET NULL
        ON UPDATE CASCADE
);


CREATE TABLE favoriteCharacters
(
	email varchar(50),
    charID char(255),
    FOREIGN KEY (email) references User(email)
		ON DELETE SET NULL
        ON UPDATE CASCADE,
        
    FOREIGN KEY (charID) references Characters(charID)
		ON DELETE SET NULL
        ON UPDATE CASCADE
);

CREATE TABLE favoriteCreators
(
	email varchar(50),
    creatorID char(255),
    FOREIGN KEY (email) references User(email)
		ON DELETE SET NULL
		ON UPDATE CASCADE,
        
	FOREIGN KEY (creatorID) references Creators(creatorID)
		ON DELETE SET NULL
        ON UPDATE CASCADE
);

CREATE TABLE favoriteSeries
(
	seriesID char(255),
    email varchar(50),
    
    FOREIGN KEY (email) references User(email)
		ON DELETE SET NULL
        ON UPDATE CASCADE,
        
    FOREIGN KEY (seriesID) references Series(seriesID)
		ON DELETE SET NULL
        ON UPDATE CASCADE
);