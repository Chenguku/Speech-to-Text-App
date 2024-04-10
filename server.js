const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000
const database = require('./data/index')

app.use(express.json())

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

app.use('/login', database.login);
app.use('/register', database.register)
app.use('/api', database.authenticate)

app.listen(PORT, err => {
    if(err) console.log(err)
    else console.log(`Server listening on port ${PORT} CTRL + C to quit`)
})