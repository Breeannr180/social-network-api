const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/,
  },
  thoughts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'thought',
  }],
  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  }],
}, { toJSON: { virtuals: true }, id: false });

const user = mongoose.model('user', userSchema);

module.exports = user;
