const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan'); // Logging API requests 
const bodyparser = require("body-parser"); // understand SENT-RECEIVED JSON requests
const path = require('path');
const cors = require('cors');
var bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
require('body-parser-xml')(bodyParser);


//DB connection function location
const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 4010 // of process.env.PORT doesn't exist put 4010

// log requests
app.use(morgan('tiny')); // this can be saved into a file ( to do later)

app.use(cors({
    origin: '*'
}));
app.options('*', cors());
app.all("/*", function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	next();
  });


//App Middleware
app.use(bodyParser.json());

// connection to mongodb database
connectDB();


app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));
app.use(bodyParser.xml());


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Controll-Allow-Headers",
        "Origin, X-Requested-Woth, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});
// set view engine
app.set("view engine", "ejs")
    //app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))


app.use('/', require('./server/Routes/router'))

app.post('/email',async (req,res)=>{
    res.send("email sent !");

    const {email} = req.body;

    //CODE
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: 'domenico.dietrich@ethereal.email',
          pass: 'wuGWUY6rGSDqgSVRC1'
        }
      });
      
      // async..await is not allowed in global scope, must use a wrapper
      // https://ethereal.email/login
        // send mail with defined transport object

        const msg = {
            from: '"Express Backend ahmed@hotmail.fr"', // sender address
            to: `${email}`, // list of receivers
            subject: "New Comment", // Subject line
            text: "You have new response for you question, come see what you got" // plain text body
          //   html: "<b>Hello world?</b>", // html body
          }
        const info = await transporter.sendMail(msg);
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      
        //
        // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
        //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
        //       <https://github.com/forwardemail/preview-email>
        //
      
    //CODE

    
})



app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
    console.log("from the env file : the port is ", PORT)

});