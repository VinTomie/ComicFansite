use ComicArchive;

#Complex queries
select  * from favoriteCreators;

#Recommended comics based on similar users
select Creators.*
from favoriteCreators
left join Creators
on favoriteCreators.creator = Creators.id
where user <> 'd@fg' and creator not in (select creator
											from favoriteCreators
											where user = 'd@fg');

#Comics not in user's favorities
#N.B. Just replace b@a with a given user's email
select C.* from Comics C
where C.id not in (
	select comic from favoriteComics
		where user = 'b@a'); 

#Comics also part of a favorite series

#Comic creators tht also created series

#Top entities; just insert corresponding target
#fields from a favorites table
select Comics.*, count(comic)
from appearsInComic
right join Comics
on appearsInComic.comic = Comics.id
group by charID
order by count(comic) desc
limit 10;
