CREATE TABLE houses (
    id SERIAL PRIMARY KEY, 
    name_applicant varchar(50),
    address_house varchar(100),
    city varchar(40),
    state_house varchar(35),
    zipcode int
);