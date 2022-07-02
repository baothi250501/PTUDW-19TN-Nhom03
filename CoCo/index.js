const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');
const cors = require("cors");
const route = require('./routes/index');
const db = require('./database');
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


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.engine("html", require("ejs").renderFile);
// app.set('views', './src/views')

const corsOptions = {
  origin: '*',
  credentials: true,       //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions)) // Use this after the variable declaration

route(app);
db.connect();

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});