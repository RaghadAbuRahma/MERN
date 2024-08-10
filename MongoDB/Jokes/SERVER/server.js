// require('dotenv').config();
const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8000;

require('./config/mongoose.config');
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const AllMyUserRoutes = require("./Routes/joke.routes");
AllMyUserRoutes(app);
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );


// const express = require('express');
// const app = express();
// require('dotenv').config(); // Load environment variables from .env file

// const mongooseConfig = require('./config/mongoose.config'); // Ensure this path/ is correct

// const PORT = process.env.PORT || 8000;

// // Other middleware and routes

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

