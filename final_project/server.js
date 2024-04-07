const express = require('express')
const app = express()
const ROOT_DIR = __dirname
const PORT = process.env.PORT || 3000


app.use(express.static(ROOT_DIR + '/dist'))

app.listen(PORT, err => {
    if(err) console.log(err)
    else console.log(`Server listening on port ${PORT} CTRL + C to quit`)
})