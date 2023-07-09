//Requires mongoose
const { Schema, Types, model } = require('mongoose'); //importing the Schema and model from mongoose
const reactionSchema = require("./Reaction");//importing the reactionSchema from the Reaction.js file
const moment = require('moment');

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) =>
      moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a")
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
}, { toJSON: { virtuals: true }, id: false });

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
