const express = require('express');
const cors = require("cors");
const route = require('./routes');
const db = require('./database');
const app = express();
const port = 8000;

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