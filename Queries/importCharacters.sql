use ComicArchive;

load data local infile 'C:/Users/Odysseus/Documents/GitHub/SQL-336/ProjectInformation/comicData.csv'
into table Comics
fields terminated by ','
enclosed by '"'
lines terminated by '\n'
ignore 1 rows;