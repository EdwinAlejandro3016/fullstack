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
    thumbnail: {
        type: Object,
        required:true
    }
})

module.exports = model('SuperHero',SuperHero);