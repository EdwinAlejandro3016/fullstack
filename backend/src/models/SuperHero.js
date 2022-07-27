const {Schema,model} = require('mongoose');

const SuperHero = new Schema({
    id_Api: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    modified: {
        type: Date,
        required: true
    },
    resourceURI: {
        type: Array
    },
    urls: {
        type: Array
    },
    thumbnail: {
        type: String,
        required: true
    },
    comics: {
        type: Array
    },
    stories: {
        type: Array
    },
    events: {
        type: Array
    },
    series: {
        type: Array
    }
})

module.exports = model('SuperHero',SuperHero);