const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, './dist')))

app.use((req, res) => {
  res.status(404).send('Error 404?');
});

app.listen(PORT, err => {
    if(err) console.log(err)
    else console.log(`Server listening on port ${PORT} CTRL + C to quit`)
})