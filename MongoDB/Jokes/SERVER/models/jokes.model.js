const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema({
    name: {
        setup: String
    },
    age: {
        punchline: Number
    }
});
 
const Joke = mongoose.model('Joke', JokeSchema);
 
module.exports = Joke;
