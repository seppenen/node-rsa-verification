const {readFileSync} = require('fs')
const jwt = require('jsonwebtoken')

let token = " "

try{
    const publicKey = readFileSync('pubKey.pem', 'utf8')
    const claims = jwt.verify(token, publicKey)
    console.log(JSON.stringify(claims))
}catch (e) {
    console.log(e)
}
