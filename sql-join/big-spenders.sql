select "firstName",
"lastName"
from "customers"
join "payments" using ("customerId")
order by "amount" desc
limit 10;
-- Select the 10 largest payment amounts,
-- including the first and last name of the customer who paid.
