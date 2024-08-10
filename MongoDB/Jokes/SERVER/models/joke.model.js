const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema({
    setup: {
        setup: String
    },
    punchline: {
        punchline: String
    }
});
 
const Joke = mongoose.model('Joke', JokeSchema);
 
module.exports = Joke;
