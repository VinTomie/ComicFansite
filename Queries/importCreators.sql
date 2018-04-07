Use yjq87qtadsz6vybx;
load data infile 'C:\Users\Steven\Desktop\Databases\SQL-336\ProjectInformation\creators-20180313T205300.csv'
into table Creators
fields terminated by ','
enclosed by '"'
lines terminated by '\n'
ignore 1 rows;