Use yjq87qtadsz6vybx;
load data infile 'C:\Users\Steven\Desktop\Databases\SQL-336\ProjectInformation\comics-20180309T022738.csv'
into table Comics
fields terminated by ','
enclosed by '"'
lines terminated by '\n'
ignore 1 rows;