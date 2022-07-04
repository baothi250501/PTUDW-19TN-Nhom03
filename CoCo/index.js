const express = require('express')
const path = require('path')
const expressHbs = require('express-handlebars');
const bodyParser = require('body-parser');
var methodOverride  = require("method-override");
const cors = require("cors");
var multer = require('multer');
var upload = multer();
const route = require('./routes/index');
const db = require('./database');
const app = express();
const port = 8000;

role = "admin"

const hbs = expressHbs.create({
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials'),
  extname: 'hbs',
  defaultLayout: 'layout',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  },
    
  // create custom helpers
  helpers:{
    multiply: function(x, y) {
      return x * y;
    },
    ifEquals: function(x, y, options) {
      console.log(x, y);
      if(x === y)
        return options.fn(this);
      return options.inverse(this);
    }
  }
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"]
  })
);

app.use(upload.array()); 

const corsOptions = {
    origin: '*',
    credentials: true,       //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  }
app.use(cors(corsOptions)) // Use this after the variable declaration

route(app);
db.connect();

app.set('port', process.env.PORT || port);
app.listen(app.get('port'), ()=>{
    console.log(`server is running on http://localhost:${app.get('port')}`);
});