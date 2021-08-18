insert into "languages" ("name")
values ('HTML'),
('CSS'),
('JavaScript')
returning *

-- Add 'HTML', 'CSS', and 'JavaScript' to the languages table
-- and retrieve the resulting rows.
-- The "languageId" and "updatedAt" are auto-generated.
