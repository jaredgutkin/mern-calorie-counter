const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()

//app config
app.use(cors())
app.use(express.json())

//port and DB configuration
const DATABASE_CONNECTION = process.env.DATABASE_URL
const PORT = process.env.PORT || 3000

mongoose
    .connect(DATABASE_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
 
//connect to port
app.listen(PORT, (req, res)=>{
    console.log(`server runnign on port ${PORT}`)
})