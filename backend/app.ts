import express = require('express');
import bodyParser = require('body-parser');
import cors = require('cors');

const app = express();

// CORS Middleware
// TODO: Add 8080, 4200 and other ports I tend to test with
const corsOptions = {
    origin: 'http://localhost:4404',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set port number
const port = process.env.PORT || 3000;