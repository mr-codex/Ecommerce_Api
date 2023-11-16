import mongoose from 'mongoose';

async function connect(){
 
    mongoose.connect('mongodb://127.0.0.1:27017/ecommerceApi'); //connecting to db
    const db = mongoose.connection;                 // getting connection status

    db.on('error',console.error.bind(console,"Error connecting to MongoDB"));  // connection status : error
    db.once('open',function(){                                           // connection status : connected/open
        console.log('Connected to mongodb DataBase')
    })
}

export default connect;
