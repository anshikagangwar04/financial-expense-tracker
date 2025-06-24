const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
// import chalk from 'chalk'
let chalk = require('chalk')
// console.log(chalk.blue('Starting server...'))

//config dotenv
dotenv.config();

//rest object
const app= express();


//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routes
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the server</h1>')
})

//port
const PORT = process.env.PORT || 8080;

//listen server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});