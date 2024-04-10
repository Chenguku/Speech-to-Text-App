const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./data/users')

exports.authenticate = function (req, res, next) {
    let auth = req.headers.authorization
    if (!auth) {
        response.setHeader('WWW-Authenticate', 'Basic realm="need to login"')
        response.writeHead(401, {
            'Content-Type': 'text/html'
        })
        console.log('No authorization found, send 401.')
        response.end();
    }
    else{
        var tmp = auth.split(' ')

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