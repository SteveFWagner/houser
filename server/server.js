require('dotenv').config()

const Express = require('express')
const BodyParser = require('body-parser')
const Massive = require('massive')
const app = Express()
const ct = require('./controller')

app.use(BodyParser.json())

let {CONNECTION_STRING, SERVER_PORT} = process.env
const PORT = SERVER_PORT

Massive(CONNECTION_STRING).then(db =>{
    app.set('db',db)
    console.log(`Server has das Data!`)
    app.listen(PORT,console.log(`Server up and running! Port ${PORT}`))
})

//Endpoints below

app.get('/api/houses', ct.getHouses)
app.post('/api/house', ct.addHouse)
app.delete('/api/house/:id', ct.deleteHouse)
