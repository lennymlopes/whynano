const mongoose = require('mongoose')

requestSchema = new mongoose.Schema({
  path: String,
  time: Date,
  newUser: Boolean
})

module.exports = mongoose.model('Request', requestSchema)
