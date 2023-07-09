const { Schema, Types, model } = require('mongoose'); // Importing the mongoose object and Types from mongoose
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
        id: false,
      }
    );

module.exports = reactionSchema;