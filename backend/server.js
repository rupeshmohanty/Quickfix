const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser  = require('body-parser');
const uri = require('./config/db.js');

// importing routes
const userRouter = require('./routes/users');

require('dotenv').config()

const app = express();
const port = 5000;

// body parser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
app.use(bodyParser.json())

// middleware
app.use(cors())
app.use(express.json())

// routes
app.use('/users', userRouter)

// mongodb connection
mongoose.connect(uri,{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },() => {
    console.log('Connected to the database!');
})

// Listening at port 5000!
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})