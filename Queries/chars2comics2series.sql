use ComicArchive;

create table appearsIn(
	charID int(11),
    comic int(11),
    primary key (charID, comic),
    foreign key (charID) references Characters (id),
    foreign key (comic) references Comics (id));
    
create table partOf(
	comic int(11),
    series int(11),
    primary key (comic, series),
    foreign key (comic) references Comics (id),
    foreign key (series) references Series (id));