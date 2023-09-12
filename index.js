require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const PORT =  5000;
const cors = require('cors');
const router = require('./router/index')
const morgan = require('morgan')
const app = express()

const corsOptions ={
    origin:["http://localhost:3000"],
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', router);
app.use(morgan('dev'));

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser:true,
            useUnifiedTopology:true,

        })
        app.listen(PORT, () => console.log(`Server start on PORT = ${PORT}`))
    } catch (e){
        console.log(e)
    }
}
start()