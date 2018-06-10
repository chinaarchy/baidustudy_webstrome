const express = require('express')

var server = express()

server.listen(8086)

server.use('/',function (req,res) {
    req.query

})