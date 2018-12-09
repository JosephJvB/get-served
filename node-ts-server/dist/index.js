"use strict";
exports.__esModule = true;
var express = require("express");
var path_1 = require("path");
var app = express();
var staticFilePath = path_1.join(__dirname + '../../../static');
app.use(express.static(staticFilePath, {}));
app.get('*', function (req, res) {
    res.sendFile(staticFilePath, 'index.html');
});
app.listen(3003);
