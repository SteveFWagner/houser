--alter table example below!

ALTER TABLE houses
ADD rent int

-- SEED stuffs

CREATE TABLE houses (
    id serial primary key,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip int,
    img text,
    mortgage decimal,
    rent decimal

)

INSERT INTO houses(name,address,city,state,zip,img,mortgage,rent)
VALUES ('Steve','123 first st','slc','ut','84020','testImg',1000,1500)

INSERT INTO houses(name,address,city,state,zip,img,mortgage,rent)
VALUES ('Steve2','123222 first st','slcc','ut','84020','testImg2',10200,15200)

select *
from houses

DELETE
FROM houses
WHERE id = $1


