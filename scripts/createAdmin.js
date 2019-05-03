const readline = require('readline')

const DB = require('../server/database/db')

function getInfo() {
  console.log('\n') // eslint-disable-line

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  rl.question('Email: ', (email) => {
    rl.question('Password: ', (password) => {
      DB.createAdmin({ email, password })
        .then(() => console.log('Successfully created admin')) // eslint-disable-line
        .catch(err => console.log(`There was an error creating the admin: ${err.message}`)) // eslint-disable-line
    })

    rl.close()
  })
}

setTimeout(getInfo, 200)
