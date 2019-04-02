// const bcrypt = require('bcrypt')

require('./mongooseConnect')

const EmployerLead = require('./models/EmployerLead')
const EmployeeLead = require('./models/EmployeeLead')
const Employee = require('./models/Employee')


function getEmployee(id) {
  if (!id) throw new Error('Employee ID required')
  const e = Employee.findById(id)
  if (!e) throw new Error('Employee not found')
}


function execEmployeeAppStep1({
  loanAmount,
  loanTerm,
}) {
  return new Employee({
    loanAmount,
    loanTerm,
    step: 2,
  })
}


function execEmployeeAppStep2({
  _id,
  firstName,
  lastName,
  suffix,
  dateOfBirth,
  phone,
}) {
  const e = getEmployee(_id)

  const { day, month, year } = dateOfBirth
  if (!day || !month || !year) {
    throw new Error('Day, month, and year are required for date of birth')
  }

  e.firstName = firstName
  e.lastName = lastName
  e.suffix = suffix
  e.dateOfBirth = { day, month, year }
  e.phone = phone
  e.step = 3

  return e.save()
}


function execEmployeeAppStep3({
  _id,
  email,
  confirmEmail,
  password,
  confirmPassword,
  subscribeToNews,
  agreeToTerms,
}) {
  const e = getEmployee(_id)
  if (email !== confirmEmail) {
    throw new Error('Email and confirm email must match')
  }

  if (password !== confirmPassword) {
    throw new Error('Password and confirm password must match')
  }

  // TODO hash password

  e.email = email
  e.password = password
  e.subscribeToNews = subscribeToNews
  e.agreeToTerms = agreeToTerms

  e.step = 4

  return e.save()
}


function createEmployerLead({
  firstName,
  lastName,
  email,
  jobTitle,
  company,
  message,
}) {
  return new EmployerLead({
    firstName,
    lastName,
    email,
    jobTitle,
    company,
    message,
  }).save()
}


function createEmployeeLead({
  firstName,
  lastName,
  email,
  jobTitle,
  company,
  message,
}) {
  return new EmployeeLead({
    firstName,
    lastName,
    email,
    jobTitle,
    company,
    message,
  }).save()
}


module.exports = {
  createEmployerLead,
  createEmployeeLead,

  execEmployeeAppStep1,
  execEmployeeAppStep2,
  execEmployeeAppStep3,
}
