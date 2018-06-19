const express = require('express');

const todoRouter = express.Router();
const os = require('os');

var soap = require('soap');
var url = 'https://graphical.weather.gov/xml/SOAP_server/ndfdXMLserver.php?wsdl';
var args = {zipCodeList: 33132};


todoRouter.get('/', (req, res) => {
    // res.send({ username: os.userInfo().username });
    soap.createClient(url, function (err, client) {
        client.LatLonListZipCode(args, function (err, result) {
            res.send({username: result.listLatLonOut.$value});
        });
    });
});

module.exports = todoRouter;
