require('./mongooseConnect')

const EmployerLead = require('./models/EmployerLead')
const EmployeeLead = require('./models/EmployeeLead')

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
}
