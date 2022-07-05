// require modules
const express = require('express')
const bodyParser = require('body-parser')

// start express
const app = express()

app.set('view engine', 'ejs')

// GET
app.get('/', function (req, res) {
  var currentDay = new Date().getDay()
  var day = ''

  switch (currentDay) {
    case 0:
      day = 'Sunday'
      break
    case 1:
      day = 'Monday'
      break
    case 2:
      day = 'Tuesday'
      break
    case 3:
      day = 'Wednesday'
      break
    case 4:
      day = 'Thursday'
      break
    case 5:
      day = 'Friday'
      break
    case 6:
      day = 'Saturday'
      break
    default:
      console.log('Error: current day is equal to: " + currentDay')
  }

  res.render('List', {
    kindOfDay: day
  })
})

// LISTEN to port
const port = 3000
app.listen(process.env.PORT || 3000, function () {
  console.log(`Server started at port ${port}.`)
}) // Heroku OR localhost:3000
