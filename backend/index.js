const connect = require("./db")

connect();

const express = require('express');
const linksRouter = require("./routes/routes")

const port = 8000;
const app = express();

app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/', linksRouter)    

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
