const express = require("express");
let app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'view', 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'view' ,'build', 'index.html'));
});


app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});