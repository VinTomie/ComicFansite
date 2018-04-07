use ComicArchive;

create table favoriteComics(
	user varchar(50),
    comic int(11),
    primary key (user, comic),
    foreign key (user) references User (email),
	foreign key (comic) references Comics(id));
        
create table favoriteCharacters(
	user varchar(50),
    charID int(11),
    primary key (user, charID),
    foreign key (user) references User (email),
	foreign key (charID) references Characters (id);
        
	create table favoriteCreators(
	user varchar(50),
    creator int(11),
    primary key (user, creator),
    foreign key (user) references User (email),
	foreign key (creator) references Creators (id));
        
create table favoriteSeries(
	user varchar(50),
    series int(11),
    primary key (user, series),
    foreign key (user) references User (email),
	foreign key (series) references Series (id));