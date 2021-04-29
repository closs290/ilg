"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const express = require("express");
const bodyParser = __importStar(require("body-parser"));
const cors = require("cors");
const ilg_routes_1 = require("./routes/ilg.routes");
const databaseName = 'mongodb://localhost:27017/characters';
// might need to be: mongodb://localhost:27017/interlinear-gloss-library
const app = express();
// CORS Middleware
// TODO: Add 8080, 4200 and other ports I tend to test with
const corsOptions = {
    origin: 'http://localhost:4404',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Set port number
const port = process.env.PORT || 3000;
// Connecting to database
mongoose.connect(databaseName, {
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
app.use('/interlinear-gloss-library', ilg_routes_1.ilgRoutes);
// Start Server
app.listen(port, () => {
    console.log('Server started and listening on port ' + port);
});
