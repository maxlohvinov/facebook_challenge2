const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const feedSchema = new Schema( {
    name: {
        type: String,
        maxLength : 15,
        required: true,
        

    },
    message: {
        maxLength : 40,
        type: String,
        required: true
    },
    createdAt: {
    type: Date,
    default: Date.now()
    }
})

const Feed = mongoose.model('Feed', feedSchema)

module.exports = {
    Feed
}