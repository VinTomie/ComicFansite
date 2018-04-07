Use yjq87qtadsz6vybx;
load data infile 'C:\Users\Steven\Desktop\Databases\SQL-336\ProjectInformation\characters-20180313T182005.csv'
into table Characters
fields terminated by ','
enclosed by '"'
lines terminated by '\n'
ignore 1 rows;