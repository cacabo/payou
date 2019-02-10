require('./mongooseConnect')

const EmployerLead = require('./models/EmployerLead')

function createEmployerLead({
  email,
  message,
  name,
}) {
  return new EmployerLead({
    email,
    message,
    name,
  }).save()
}

module.exports = {
  createEmployerLead,
}
