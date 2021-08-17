const mongoose = require('mongoose')
const Schema = mongoose.Schema

const msgSchema = new Schema({
    name: {
      type: String,
    },
      email: {
      type: String,
    },
    message: {
      type: String,
    }
  }, {timestamps: true})

  module.exports = mongoose.model( 'msg', msgSchema )
