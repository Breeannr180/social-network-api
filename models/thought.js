const mongoose = require('mongoose');
const { Schema, Types } = mongoose; // Importing the mongoose object and Types from mongoose
const moment = require('moment');

const reactionSchema = new Schema(
{
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },

    reactionBody: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 280,
    },

    username: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) =>
        moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a")
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);


const thoughtSchema = new mongoose.Schema({
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

const thought = mongoose.model('thought', thoughtSchema);

module.exports = thought;