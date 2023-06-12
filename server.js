const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const cors=require('cors');
var usn='';
var mai='';
const cart=require("./cart")
app.listen(3336, () => {
    console.log('Server running on port 3000');
  });
const collection=require("./mongodb");
app.use(bodyParser.json());
