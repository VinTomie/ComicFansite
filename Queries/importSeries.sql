Use yjq87qtadsz6vybx;
load data infile 'C:\Users\Steven\Desktop\Databases\SQL-336\ProjectInformation\series-20180310T002815.csv'
into table Series
fields terminated by ','
enclosed by '"'
lines terminated by '\n'
ignore 1 rows;