const { listeners } = require('process')

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./data/users')

exports.authenticate = function (req, res, next) {
    let auth = req.headers.authorization
    console.log(auth)
    if (!auth) {
        res.setHeader('WWW-Authenticate', 'Basic realm="need to login"')
        res.writeHead(401, {
            'Content-Type': 'text/html'
        })
        console.log('No authorization found, send 401.')
        res.end();
    }
    else{
        credentials = auth.split(':')
        let username = credentials[0]
        let password = credentials[1]
        console.log("User:" + username)
        console.log("Password:" + password)
        
        let authorized = false
        db.all("SELECT * FROM users", function(err, users){
            for(let i = 0; i < users.length; i++){
                console.log('login')
                if(users[i].username == username && users[i].password == password){
                    authorized = true
                    req.userID = username
                    req.userRole = users[i].role
                    break
                }
            }
        })
        if(!authorized){
            res.setHeader('WWW-Authenticate', 'Basic realm="need to login"')
            res.writeHead(401, {
                'Content-Type': 'text/html'
              })
              console.log('No authorization found, send 401.')
              res.end()      
        }
        else{
            next()
        }
    }
}

exports.transcripts = function(req, res, next){
    let rows
    if(req.userRole == 'guest'){
        db.all("SELECT * FROM transcripts WHERE username LIKE '" + req.userID + "'", function(err, transcripts){
            rows = transcripts
        })
    }
    if(req.userRole == 'admin'){
        db.all("SELECT * FROM transcripts", function(err, transcripts){
            rows = transcripts
        })
    }
}

exports.register = function (req, res, next) {
    let username = req.body.userID
    let password = req.body.password

    if (!username || !password) {
        res.end()
    }

    let sql = "SELECT username FROM users WHERE username LIKE '" + username + "'"
    db.all(sql, function (err, credentials) {
        if (credentials[0]) {
            res.end(JSON.stringify({ 'success': false }))
        }
        else {
            sql = "INSERT INTO users VALUES ('" + username + "', '" + password + "', 'guest')"
            db.run(sql, (err) => { if (err) console.log(err.message) })
            res.end(JSON.stringify({ 'success': true }))
        }
    })
}

exports.login = function(req, res, next){
    let username = req.body.userID
    let password = req.body.password

    if (!username || !password || req.headers.authorization) {
        res.end()
    }
    let sql = "SELECT username, password FROM users WHERE username LIKE '" + username + "'"
    db.all(sql, function (err, credentials) {
        if(!credentials[0]){
            res.end(JSON.stringify({ 'success': false }))
        }
        else if (credentials[0].username == username && credentials[0].password == password) {
            res.end(JSON.stringify({ 'success': true }))
        }
        else {
            res.end(JSON.stringify({ 'success': false }))
        }
    })
}