require('dotenv').config()
const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 8080

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('client/build'));

app.use(require("./routes"));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

app.listen(PORT, function () {
    console.log(`App listening on PORT ${PORT}`);
});