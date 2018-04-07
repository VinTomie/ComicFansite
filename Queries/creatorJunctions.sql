use ComicArchive;
        
create table createdComic(
	creator int(11),
    comic int(11),
    primary key (creator, comic),
    foreign key (creator) references Creators (id),
    foreign key (comic) references Comics (id));
    
create table createdSeries(
	creator int(11),
    series int(11),
    primary key (creator, series),
    foreign key (creator) references Creators (id),
    foreign key (series) references Series (id));
    
create table createdCharacter(
	creator int(11),
    comic int(11),
    primary key (creator, comic),
    foreign key (creator) references Creators (id),
    foreign key (comic) references Characters (id));