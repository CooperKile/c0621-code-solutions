select "firstName",
"lastName"
from "actors"
join "castMembers" using ("actorId")
join "films" using ("filmId")
where "films"."title" = 'Jersey Sassy';


-- Use two joins to select the "firstName" and "lastName" of
-- all actors that starred in the film 'Jersey Sassy'.
-- There is a special table in the database named "castMembers" for this purpose.
