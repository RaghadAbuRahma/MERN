// const mongoose = require('mongoose');
// const dbName = process.env.DB;
// const username = process.env.ATLAS_USERNAME;
// const pw = process.env.ATLAS_PASSWORD;
// const uri = `mongodb+srv://${username}:${pw}@cluster0.fpg6ifj.mongodb.net/${dbName}?retryWrites=true&w=majority`;
// mongoose.connect(uri)
//     .then(() => console.log("Established a connection to the database"))
//     .catch(err => console.log("Something went wrong when connecting to the database", err));

const mongoose = require('mongoose');
// require('dotenv').config(); // Load environment variables from .env file

const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const password = process.env.ATLAS_PASSWORD;
const uri = `mongodb+srv://${username}:${password}@cluster0.fpg6ifj.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(uri)
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));





