import app from './configs/server_config';
var express = require('express');

var server = app.listen(9100, () => {
    console.log(`Server is running on port: 9100`);
});