const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name : { type: String,  
        required: [
        true,
        "Name is required"
    ]},
    position: { type: String,
        required: [
            true,
            "Position is required"
        ],
        minlength : [3, "position must be more than 3 characters"]

     }
}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);

