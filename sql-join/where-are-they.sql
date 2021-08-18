select "line1",
"cities"."name" as "city",
"district"
from "addresses"
join "cities" using ("cityId");
-- Generate a list of all addresses in the system that includes
-- their "line1", "city"."name", and "district".
-- Bragging rights if you get the name of the country in there too.
