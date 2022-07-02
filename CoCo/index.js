
const express = require('express')
const path = require('path')
const expressHbs = require('express-handlebars');
const bodyParser = require('body-parser')
//const cors = require("cors");
// const route = require('./routes/index');
// const db = require('./database');
const app = express();
const port = 8000;

const hbs = expressHbs.create({
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials'),
  extname: 'hbs',
  defaultLayout: 'layout'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// const corsOptions = {
//     origin: '*',
//     credentials: true,       //access-control-allow-credentials:true
//     optionSuccessStatus: 200,
//   }
// app.use(cors(corsOptions)) // Use this after the variable declaration

// route(app);
// db.connect();

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), ()=>{
    console.log(`server is running on port ${app.get('port')}`);
});