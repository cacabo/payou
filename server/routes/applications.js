const router = require('express').Router()

module.exports = function applicationsRoute(DB) {
  router.get('/', (req, res) => {
    res.status(200)
      .json({ success: true })
  })

  router.get('/:id', (req, res) => {
    const { params: { id } } = req

    console.log('ID', id)

    DB.getEmployee(id)
      .then((data) => {
        const {
          loanAmount,
          loanTerm,
          firstName,
          lastName,
          suffix,
          dateOfBirth,
          phone,
          email,
          subscribeToNews,
          agreeToTerms,
          payrollId,
          grossAnnualIncome,
          otherIncome,
          employmentStartDate,
          paycycle,
          address,
          timeAtAddress,
          residentialStatus,
          residentialStatusExplanation,
          ssn,
          numberOfFinancialDependents,
          civilStatus,
          expectsChangesToEmploymentStatus,
        } = data
        const lastTwo = ssn.substring(ssn.length - 2)
        const cleanedData = Object.assign({}, {
          loanAmount,
          loanTerm,
          firstName,
          lastName,
          suffix,
          dateOfBirth,
          phone,
          email,
          subscribeToNews,
          agreeToTerms,
          payrollId,
          grossAnnualIncome,
          otherIncome,
          employmentStartDate,
          paycycle,
          address,
          timeAtAddress,
          residentialStatus,
          residentialStatusExplanation,
          ssn,
          numberOfFinancialDependents,
          civilStatus,
          expectsChangesToEmploymentStatus,
        }, {
          password: '••••••••••••••••',
          ssn: `***-**-**${lastTwo}`,
        })
        res.status(200).send(cleanedData)
      })
      .catch(err => res.status(404).send({ error: err.message }))
  })

  router.post('/:step', (req, res) => {
    let { step } = req.params

    try {
      step = parseInt(step, 10)

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
        .then((newBody) => {
          res.status(200).send(newBody)
        })
        .catch(err => res.status(500).send({ error: err.message }))
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })


  router.all((req, res) => res.status(404).send())


  return router
}
