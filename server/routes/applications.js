const router = require('express').Router()
const routes = require('../../constants/routes')

module.exports = function applicationsRoute(DB) {
  router.post('/:step', (req, res) => {
    let { step } = req.params

    try {
      step = parseInt(step, 10)

      // TODO return the next step in the database response

      const { body } = req
      let func

      // Find which database function to call based on the user's step in the
      // application process
      switch (step) {
        case 1:
          func = DB.execEmployeeAppStep1
          break

        case 2:
          func = DB.execEmployeeAppStep2
          break

        case 3:
          func = DB.execEmployeeAppStep3
          break

        case 4:
          func = DB.execEmployeeAppStep4
          break

        case 5:
          func = DB.execEmployeeAppStep5
          break

        case 6:
          func = DB.execEmployeeAppStep6
          break

        case 7:
          func = DB.execEmployeeAppStep7
          break

        default:
          res.status(404).send()
          return
      }

      func(body)
        .then(() => res.redirect(routes.applicationRoute(step + 1)))
        .catch(err => res.status(404).send(err.message))
    } catch (e) {
      res.status(404).send()
    }
  })


  return router
}
