let express = require('express')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')

let app = express()

let apiRoutes = require('./api-routes')

app.use(bodyParser.urlencoded({
     extended:true
}))

app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/resthub', {
     useNewUrlParser: true
})

var db = mongoose.connection

if (!db){
     console.log("Error connect db")
} else {
     console.log("Connect success")
}

var port = process.env.PORT || 8080

app.get('/', (req, res) => res.send("Hello World with Express"))

app.use('/api', apiRoutes)

app.listen(port, function(){
     console.log("Running Resthub on port "+ port)
})