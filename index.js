require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const PORT =  5000;
const cookieParser = require('cookie-parser');
const cors = require('cors');
const router = require('./router')
const morgan = require('morgan')
const errorMiddleWare = require('./middlewares/error-middleware')
const app = express()

const corsOptions ={
    origin:["http://localhost:3000"],
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser())
app.use('/api', router);
app.use(morgan('dev'));
app.use(errorMiddleWare);

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