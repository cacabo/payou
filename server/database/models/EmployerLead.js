const mongoose = require('mongoose')

const { Schema } = mongoose

const EmployerLeadSchema = new Schema({
  firstName: {
    required: [true, 'First name is required'],
    type: String,
    maxLength: 500,
    minLength: 1,
  },

  lastName: {
    required: [true, 'Last name is required'],
    type: String,
    maxLength: 500,
    minLength: 1,
  },

  email: {
    required: [true, 'Email is required'],
    type: String,
    unique: true,
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

  company: {
    required: [true, 'Company name is required'],
    type: String,
    maxLength: 500,
    minLength: 1,
  },

  message: {
    required: [true, 'Message is required'],
    type: String,
    minLength: 1,
    maxLength: 10000,
  },
}, {
  timestamps: true,
})

module.exports = mongoose.model('EmployerLead', EmployerLeadSchema)
