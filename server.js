const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const path = require('path')
const sgMail = require('@sendgrid/mail')


const routes = require('./constants/routes')
const applicationsRouter = require('./server/routes/applications')
const leadsRouter = require('./server/routes/leads')


const DB = require('./server/database/db')


const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


const { SENDGRID_API_KEY, EMAIL } = process.env


if (!SENDGRID_API_KEY) {
  console.log('Missing SENDGRID_API_KEY') // eslint-disable-line
  process.exit(1)
}


if (!EMAIL) {
  console.log('Missing EMAIL') // eslint-disable-line
  process.exit(1)
}


sgMail.setApiKey(process.env.SENDGRID_API_KEY)


app.prepare()
  .then(() => {
    const server = express()

    // Middleware
    server.use(bodyParser.json())
    server.use(express.static(path.join(__dirname, 'public')))

    server.use('/api/applications', applicationsRouter(DB))
    server.use('/api/leads', leadsRouter(DB))

    server.get(routes.HOME_ROUTE, (req, res) => (
      app.render(req, res, routes.HOME_ROUTE)
    ))

    server.get(routes.ADMIN_LOGIN_ROUTE, handle)
    server.get(routes.APPLICATION_ROUTE, handle)
    server.get(routes.ABOUT_ROUTE, handle)
    server.get(routes.EMPLOYERS_ROUTE, handle)
    server.get(routes.PRIVACY_ROUTE, handle)
    server.get('/_error', handle)

    server.get(routes.WILD_ROUTE, (req, res) => (
      app.render(req, res, '/_error')
    ))

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line
    })
  })
