const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())