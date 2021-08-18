select "releaseYear",
"categories"."name" as "category"
from "films"
join "filmCategory" using ("filmId")
join "categories" using ("categoryId")
where "films"."title" = 'Boogie Amelie';
-- Use two joins to select the "releaseYear" and "categories"."name" of the film
-- with the "title" 'Boogie Amelie'. There is a special
-- table in the database named "filmCategory" for this purpose.
