const readline = require('readline')

const DB = require('../server/database/db')

function getInfo() {
  DB.connect()
    .then(() => {
      console.log('\nCreate a new admin\n') // eslint-disable-line

      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      })

      rl.question('Email: ', (email) => {
        rl.question('Password: ', (password) => {
          rl.close()

          DB.createAdmin({ email, password })
            .then(() => {
              console.log('\nSuccessfully created admin') // eslint-disable-line
              process.exit(0)
            })
            .catch((err) => {
              console.log(`\nThere was an error creating the admin:\n${err.message}`) // eslint-disable-line
              process.exit(1)
            })
        })
      })
    })
    .catch(() => {
      console.log('Something went wrong') // eslint-disable-line
      process.exit(1)
    })
}

getInfo()
