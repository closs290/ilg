"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const environment_1 = require("./environment");
const ilg_routes_1 = require("./routes/ilg.routes");
const app = express();
// CORS Middleware
const corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Set port number
const port = process.env.PORT || 3000;
// Connecting to database
mongoose.connect(environment_1.databaseName, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
// If there is a connection error with db
db.on('error', console.error.bind(console, 'connection error:'));
// If DB is opened successfully
db.once('open', () => {
    console.log('Connection Successful!');
});
// Body Parser Middleware
app.use(bodyParser.json());
app.use('/ilgs', ilg_routes_1.ilgRoutes);
// Start Server
app.listen(port, () => {
    console.log('Server started and listening on port ' + port);
});
