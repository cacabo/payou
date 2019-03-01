const router = require('express').Router()
const sgMail = require('@sendgrid/mail')

const { EMAIL } = process.env

const composeEmail = (formName, params, email, message) => {
  const paramsStr = Object.keys(params)
    .map(key => `${key}: ${params[key]}`)
    .join('\n')

  const paramsHTML = `
    <p>
      ${Object.keys(params).map(key => `<strong>${key}:</strong> ${params[key]}`).join('<br />')}
    </p>
  `

  return {
    to: EMAIL,
    from: email,
    subject: `SalaryMatch ${formName} form submission`,
    text: `${paramsStr}\n\n${message}`,
    html: `
      ${paramsHTML}
      <br />
      <p>${message}</p>
    `,
  }
}

module.exports = function leadsRouter(DB) {
  router.get('/', (req, res) => {
    res.status(200)
      .json({ success: true })
  })


  router.post('/employer', (req, res) => {
    const {
      firstName,
      lastName,
      email,
      company,
      message,
    } = req.body

    const msg = composeEmail('employer', {
      firstName,
      lastName,
      email,
      company,
    }, email, message)

    const awaitSendMail = sgMail.send(msg)
    const awaitCreateDBEntry = DB.createEmployerLead({
      firstName,
      lastName,
      email,
      company,
      message,
    })

    Promise.all([awaitSendMail, awaitCreateDBEntry])
      .then(res.send({ success: true }))
      .catch((err) => {
        res.status(400)
          .send({
            success: false,
            message: err.message || 'There was an error, please check the form and try again',
          })
      })
  })


  router.post('/employee', (req, res) => {
    const {
      firstName,
      lastName,
      email,
      company,
      message,
    } = req.body

    const msg = composeEmail('employee', {
      firstName,
      lastName,
      email,
      company,
    }, email, message)

    const awaitSendMail = sgMail.send(msg)
    const awaitCreateDBEntry = DB.createEmployerLead({
      firstName,
      lastName,
      email,
      company,
      message,
    })

    Promise.all([awaitSendMail, awaitCreateDBEntry])
      .then(res.send({ success: true }))
      .catch((err) => {
        res.status(400)
          .send({
            success: false,
            message: err.message || 'There was an error, please check the form and try again',
          })
      })
  })


  return router
}
