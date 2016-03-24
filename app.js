"use strict"

var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')

// Serve up public/ftp folder
var serve = serveStatic('public', {'index': ['index.html']})
var port = 2200
var welcome = ["The server static is started on port ", port ,". Enjoy !"].join("")

// Create server
var server = http.createServer(function(req, res){
  var done = finalhandler(req, res)
  serve(req, res, done)
})

// Listen
server.listen(port)
console.log(welcome)
