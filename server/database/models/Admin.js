const mongoose = require('mongoose')

const { Schema } = mongoose

const AdminSchema = new Schema({
  email: {
    type: String,
    maxLength: 500,
    minLength: 1,
    validate: {
      validator: (v) => {
        const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/ // eslint-disable-line
        return emailRegex.test(v)
      },
      message: props => `${props.value} is not a valid email address`,
    },
  },
  password: {
    type: String,
    minLength: [2, 'Password too short'],
  },
}, {
  timestamps: true,
})

module.exports = mongoose.model('Admin', AdminSchema)
