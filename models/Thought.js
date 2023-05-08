const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema
},

reactionBody: {
    type: String,
    required: true,
    maxlength: 280
},

username: {
    type: String,
    required: true,
},

createdAt: {
    type: Date,
    required: true,
},

toJSON: {
    virtuals: true,
    getters: true
},
id: false
});

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280
    },

    createdAt: {
        type: Date,
        required: true
    },

    username: { 
        type: String,
        required: true,
    },

    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
    },
    reactions: [ReactionSchema]
    );

    module.exports = ThoughtSchema;

