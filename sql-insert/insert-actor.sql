insert into "actors" ("firstName", "lastName")
values ('Robert', 'Pattinson')
returning *;

-- Add an actor to the "actors" table.
-- And retrieve the resulting row.
-- The "actorId" and "updatedAt" are auto-generated.
