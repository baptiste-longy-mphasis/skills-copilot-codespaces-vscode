// Create web server
const express = require('express');
const app = express();
// Import the comments array
const comments = require('./comments');
// Import the body-parser
const bodyParser = require('body-parser');
// Add the body-parser middleware to Express
app.use(bodyParser.json());