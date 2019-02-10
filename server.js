const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const path = require('path')

const routes = require('./constants/routes')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    // Middleware
    server.use(bodyParser.json())
    server.use(express.static(path.join(__dirname, 'public')))

    // server.get(routes.HOME_ROUTE, (req, res) => handle(req, res))

    server.get(routes.HOME_ROUTE, (req, res) => (
      app.render(req, res, routes.HOME_ROUTE)
    ))

    server.get(routes.WILD_ROUTE, (req, res) => (
      handle(req, res)
    ))

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line
    })
  })
