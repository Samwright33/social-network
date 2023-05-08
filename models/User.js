const { Schema, model, Types } = require('mongoose');

const userSchema= new Schema({
    username: {
        type: String,
        required: true,
},

email: {
    type: String,
    required: true,
},

thoughts: {
    type: String,
    required: true,
},

friends: {
    type: String,
    required: true,
},

toJSON: {
    virtuals: true,
    getters: true
},
id: false
});

module.exports = userSchema
