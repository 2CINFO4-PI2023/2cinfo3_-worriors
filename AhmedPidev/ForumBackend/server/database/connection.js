const mongoose = require('mongoose'); // responsible for every operation with the MongoDB local|Remote:Atlas

const connectDB = async () => { // returns two methods :  success or failure
    try{
        // mongodb connection string
        const con = await mongoose.connect(process.env.CONNECTION_STRING_REMOTE, {
            useNewUrlParser: true,
            useUnifiedTopology: true, // search for the server
            //useFindAndModify: false,
            // useCreateIndex: true
        })

        console.log(`MongoDB is connected to your remote Machine  : ${con.connection.host}`);
    }catch(err){
        console.log("problem occured while connecting");
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB