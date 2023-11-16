import express from 'express';
import bodyParser from 'body-parser';

import connect from './config/mongoose.js';
import indexRouter  from './routes/index.js';


//Creating express server
const app = express();
const port = 8000;   


app.use(bodyParser.json())  //used to parse json data in req.body

app.use('/',indexRouter);  //directs all the requests to indexRouter



//firing express server
app.listen(port,(err)=>{

    if(err){
        console.log("Error in listening to port ",port);
        return;
    }

    console.log('Server running on port ', port);

    //connecting to mongodb Database
    connect();
});