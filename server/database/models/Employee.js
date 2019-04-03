const mongoose = require('mongoose')

const { Schema } = mongoose

const states = require('../../../constants/states')
const residentialStatusOptions = require('../../../constants/residentialStatusOptions')

// TODO full time or part time

const EmployeeSchema = new Schema({
  // General
  step: {
    type: Number,
    default: 1,
    minValue: 1,
    maxValue: 8,
  },


  // Step 1
  loanAmount: {
    type: Number,
    required: [true, 'You must select a loan amount'],
  },
  loanTerm: {
    type: Number,
    required: [true, 'You must select a loan term'],
    min: [3, 'Loan must be at least 3 months'],
    max: [36, 'Loan is at most 36 months'],
  },


  // Step 2
  firstName: {
    type: String,
    maxLength: 500,
    minLength: 1,
  },
  lastName: {
    type: String,
    maxLength: 500,
    minLength: 1,
  },
  suffix: {
    type: String,
    maxLength: 20,
  },
  dateOfBirth: {
    day: {
      minValue: 1,
      maxValue: 31,
      type: Number,
    },
    month: {
      minValue: 1,
      maxValue: 12,
      type: Number,
    },
    year: {
      minValue: 1850,
      maxValue: 2050,
      type: Number,
    },
  },
  phone: {
    type: String,
    validate: {
      validator: v => /\d{3}-\d{3}-\d{4}/.test(v),
      message: props => `${props.value} is not a valid phone number!`,
    },
  },


  // Step 3
  email: {
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
  password: {
    type: String,
    minLength: [2, 'Password too short'],
  },
  subscribeToNews: {
    type: Boolean,
    default: false,
  },
  agreeToTerms: {
    type: Boolean,
    validate: {
      validator: v => Boolean(v), // The value must be truthy
      message: () => 'You must agree to the terms and conditions to proceed',
    },
  },


  // Step 4
  payrollId: {
    type: String,
    minLength: 1,
    maxLength: 1000,
  },
  grossAnnualIncome: {
    type: Number,
    minValue: [0, 'Income must be non-negative'],
    maxValue: [999999999, 'Income cannot be in excess of 1 billion'],
  },
  otherIncome: {
    type: Number,
    minValue: [0, 'Other income must be non-negative'],
    maxValue: [999999999, 'Other income cannot be in excess of 1 billion'],
  },
  employmentStartDate: {
    month: {
      type: Number,
      minValue: 1,
      maxValue: 12,
    },
    year: {
      type: Number,
      minValue: 1850,
      maxValue: 2050,
    },
  },
  paycycle: { // Frequency of pay in weeks
    type: Number,
    minValue: 1,
    maxValue: 52,
  },


  // Step 5
  address: {
    address1: {
      type: String,
      minLength: 1,
      maxLength: 500,
    },
    address2: {
      type: String,
      minLength: 0,
      maxLength: 500,
    },
    city: {
      type: String,
      maxLength: 500,
      minLength: 2,
    },
    state: {
      type: String,
      minLength: 2,
      maxLength: 2,
      validate: {
        validator: v => states.includes(v),
        message: props => `${props.value} is not a valid state`,
      },
    },
    zip: {
      type: String,
      validate: {
        validator: v => /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(v),
        message: props => `${props.value} is not a valid zipcode`,
      },
    },
  },
  timeAtAddress: { // In months
    type: Number,
    minValue: 0,
    maxValue: 2000,
  },
  residentialStatus: {
    type: String,
    enum: residentialStatusOptions,
  },
  residentialStatusExplanation: {
    type: String,
    minLength: 0,
    maxLength: 500,
  },


  // Step 6
  ssn: { // Ref: zparacha.com/validate-social-security-number-using-javascript-regular-expressions
    type: String,
    validate: {
      validator: v => /^[0-9]{3}?[0-9]{2}?[0-9]{4}$/.test(v),
      message: () => 'Please enter a valid SSN',
    },
  },
  numberOfFinancialDependents: {
    type: Number,
    minValue: 0,
    maxValue: 50,
  },
  civilStatus: {
    type: String,
    minLength: 1,
    maxLength: 200,
  },
  expectsChangesToEmploymentStatus: {
    type: Boolean,
  },

  // Step 7
  applied: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
})

module.exports = mongoose.model('Employee', EmployeeSchema)
