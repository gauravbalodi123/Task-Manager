if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}


const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDB = require('./seed');
const tasksRoutes = require('./apis/tasksRoutes')
const cors = require('cors')

const dbUrl = process.env.dbUrl

mongoose.connect(dbUrl)
.then(()=>console.log('open connection'))
.catch((err)=>console.log(err));



app.get('/hello' , (req,res)=>{
    res.status(200).json({msg:'hello from task manager server'})
})

// seed the database with dummy issues , only to run once 
// seedDB();


app.use(cors());



app.use(express.json());


app.use(tasksRoutes);





const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`server started at ${port}`)
})





