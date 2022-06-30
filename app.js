const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const calorie = require('./routes/calorie.routes')
const users = require('./routes/users.routes')

require('dotenv').config()

const app = express()

//app config
app.use(cors())
app.use(express.json())
app.use('/calorie', calorie)
app.use('/users', users)

//port and DB configuration
const DATABASE_CONNECTION = process.env.DATABASE_URL
const PORT = process.env.PORT || 3000

//mongoose connection
mongoose
    .connect(DATABASE_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
 
//connect to port
app.listen(PORT, (req, res)=>{
    console.log(`server runnign on port ${PORT}`)
})