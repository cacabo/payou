const bcrypt = require('bcrypt')
require('./mongooseConnect')


const EmployerLead = require('./models/EmployerLead')
const EmployeeLead = require('./models/EmployeeLead')
const Employee = require('./models/Employee')
const Admin = require('./models/Admin')


const { SALT_ROUNDS } = process.env
const saltRounds = parseInt(SALT_ROUNDS, 10)


async function getEmployee(id) {
  if (!id) throw new Error('Employee ID required')
  const e = await Employee.findById(id)
  if (!e) throw new Error('Employee not found')
  return e
}


function hashPassword(password) {
  return new Promise((resolve, reject) => {
    if (!password) return reject(new Error('Please enter a password'))
    if (password.length < 5) return reject(new Error('Password must be at least 5 characters'))

    return bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) return reject(err)
      return bcrypt.hash(password, salt, (hashErr, hash) => {
        if (hashErr) return reject(hashErr)
        return resolve(hash)
      })
    })
  })
}


function findAdmin({ email, password }) {
  if (!password) return Admin.findOne({ email })
  return new Promise((resolve, reject) => {
    hashPassword(password)
      .then(hash => resolve(Admin.findOne({ email, password: hash })))
      .catch(reject)
  })
}


function createAdmin({ email, password }) {
  return new Promise((resolve, reject) => {
    if (!password) return reject(new Error('Please enter a password'))
    if (password.length < 5) return reject(new Error('Password must be at least 5 characters'))

    return hashPassword(password)
      .then(hash => new Admin({ email, password: hash }).save()
        .then(resolve)
        .catch(reject))
      .catch(reject)
  })
}


function execEmployeeAppStep1({
  loanAmount,
  loanTerm,
}) {
  return new Employee({
    loanAmount,
    loanTerm,
    step: 2,
  }).save()
}


function execEmployeeAppStep2({
  id,
  firstName,
  lastName,
  suffix,
  dateOfBirth,
  phone,
}) {
  return new Promise((resolve, reject) => {
    getEmployee(id).then((e) => {
      if (
        !firstName
        || !lastName
        || !dateOfBirth
        || !phone
      ) {
        throw new Error('Please fill in all fields')
      }

      const { day, month, year } = dateOfBirth
      if (!day || !month || !year) {
        throw new Error('Day, month, and year are required for date of birth')
      }

      e.firstName = firstName
      e.lastName = lastName
      e.suffix = suffix
      e.dateOfBirth = { day, month, year }
      e.phone = phone

      if (e.step === 2) {
        e.step = 3
      }

      e.save()
        .then(resolve)
        .catch(reject)
    })
      .catch(reject)
  })
}


function execEmployeeAppStep3({
  id,
  email,
  password,
  confirmPassword,
  subscribeToNews,
  agreeToTerms,
}) {
  return new Promise((resolve, reject) => {
    getEmployee(id).then((e) => {
      if (e.step < 3) {
        throw new Error('You must complete other steps before this one')
      }

      if (
        !email
        || !password
        || !confirmPassword
      ) {
        throw new Error('Please fill in all fields')
      }

      if (password !== confirmPassword) {
        throw new Error('Password and confirm password must match')
      }

      if (password.length < 5) {
        throw new Error('Password must be at least 5 characters long')
      }

      hashPassword(password)
        .then((hash) => {
          e.email = email
          e.password = hash
          e.subscribeToNews = subscribeToNews
          e.agreeToTerms = agreeToTerms

          if (e.step === 3) {
            e.step = 4
          }

          return e.save()
            .then(resolve)
            .catch(reject)
        })
        .catch(reject)
    }).catch(reject)
  })
}


function execEmployeeAppStep4({
  id,
  payrollId,
  grossAnnualIncome,
  otherIncome,
  employmentStartDate,
  paycycle,
}) {
  return new Promise((resolve, reject) => {
    getEmployee(id).then((e) => {
      if (e.step < 4) {
        throw new Error('Please complete earlier steps')
      }

      if (
        !payrollId
        || !grossAnnualIncome
        || !otherIncome
        || !employmentStartDate
        || !paycycle
      ) {
        throw new Error('Please fill in all fields')
      }

      const { month, year } = employmentStartDate
      if (!month || !year) {
        throw new Error('Include start month and year')
      }

      e.payrollId = payrollId
      e.grossAnnualIncome = grossAnnualIncome
      e.otherIncome = otherIncome
      e.employmentStartDate = employmentStartDate
      e.paycycle = paycycle

      if (e.step === 4) {
        e.step = 5
      }

      e.save()
        .then(resolve)
        .catch(reject)
    }).catch(reject)
  })
}


function execEmployeeAppStep5({
  id,
  address,
  timeAtAddress,
  residentialStatus,
  residentialStatusExplanation,
}) {
  return new Promise((resolve, reject) => {
    getEmployee(id).then((e) => {
      if (e.step < 5) {
        throw new Error('Please complete earlier steps')
      }

      if (
        !address
        || timeAtAddress === undefined
        || timeAtAddress === null
        || !residentialStatus
      ) {
        throw new Error('Please fill in all fields')
      }

      const {
        address1,
        address2,
        city,
        state,
        zip,
      } = address

      if (
        !address1
        || !city
        || !state
        || !zip
      ) {
        throw new Error('Please enter a valid address')
      }

      e.address = {
        address1,
        address2,
        city,
        state,
        zip,
      }
      e.timeAtAddress = timeAtAddress
      e.residentialStatus = residentialStatus
      e.residentialStatusExplanation = residentialStatusExplanation

      if (e.step === 5) {
        e.step = 6
      }

      e.save()
        .then(resolve)
        .catch(reject)
    }).catch(reject)
  })
}


function execEmployeeAppStep6({
  id,
  ssn,
  numberOfFinancialDependents,
  civilStatus,
  expectsChangesToEmploymentStatus,
}) {
  return new Promise((resolve, reject) => {
    getEmployee(id).then((e) => {
      if (e.step < 6) {
        throw new Error('Please complete prior steps')
      }

      if (!ssn
        || numberOfFinancialDependents === null
        || numberOfFinancialDependents === undefined
        || !civilStatus
      ) {
        throw new Error('Please fill out all fields')
      }

      e.ssn = ssn
      e.numberOfFinancialDependents = numberOfFinancialDependents
      e.civilStatus = civilStatus
      e.expectsChangesToEmploymentStatus = expectsChangesToEmploymentStatus

      if (e.step === 6) {
        e.step = 7
      }

      e.save()
        .then(resolve)
        .catch(reject)
    }).catch(reject)
  })
}


function execEmployeeAppStep7({ id }) {
  return new Promise((resolve, reject) => {
    getEmployee(id).then((e) => {
      if (e.step < 7) {
        throw new Error('Please complete all steps before this')
      }

      e.step = 8
      e.applied = true

      // TODO trigger other actions?

      e.save
        .then(resolve)
        .catch(reject)
    }).catch(reject)
  })
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
  createAdmin,
  findAdmin,

  createEmployerLead,
  createEmployeeLead,

  getEmployee,

  execEmployeeAppStep1,
  execEmployeeAppStep2,
  execEmployeeAppStep3,
  execEmployeeAppStep4,
  execEmployeeAppStep5,
  execEmployeeAppStep6,
  execEmployeeAppStep7,
}
