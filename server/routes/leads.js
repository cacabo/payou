const router = require('express').Router()

module.exports = function leadsRouter(DB) {
  router.get('/', (req, res) => {
    res.status(200)
      .json({ success: true })
  })

  return router
}
