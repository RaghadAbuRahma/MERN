const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;


// req is short for request
// res is short for response
app.get("/api", (req, res) => {
    res.send("Our express api server is now sending this over to the browser");
});

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

// The import line will look different than what is in Faker's documentation
// because we are working with an express application

// we can create a function to return a random / fake "Product"
const createUser = () => {
    const newFake = {
        password : faker.internet.password(),
        phoneNumber: faker.phone.number('###-###-###'),
        email : faker.internet.email(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        ID : faker.phone.number('###')

    };
    return newFake;
};
    
const newFakeUser = createUser();
// console.log(newFakeUser);

const createCompany = () => {
    const newFake = {
        name: faker.company.name(),
        ID : faker.phone.number('###'),
        address : [faker.address.street() , faker.address.city(), faker.address.state(), faker.address.zipCode(), faker.address.country()]


    };
    return newFake;
};
    
const newFakeCompany = createCompany();
// console.log(newFakeCompany);

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users/new", (req, res) => {
    res.json( createUser() );
});

app.get("/api/companies/new", (req, res) => {
    res.json( createCompany() );
});

app.get("/api/user/company", (req, res) => {
    const user = createUser();
    const company = createCompany();
    res.json({ user, company });
});





