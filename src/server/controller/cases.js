const express = require('express');

const casesController = express.Router();

const soap = require('soap');

const wsdlURL = 'http://service.vmsak-prod.no/vms/MineVergemalServices?wsdl';
const args = { fodselsnummer: 'FIND SOME VERGE FNR FROM PROD' };


casesController.get('/', (req, res) => {
  soap.createClient(wsdlURL, (clientErr, client) => {
    client.hentPersonOgVerge(args, (callErr, result) => {
      if (callErr !== null) {
        console.log(`Error while calling MineVergemalServices hentPersonOgVerge: ${callErr.message}`);
        res.send({ cases: [] });
      }
      res.send({ cases: result.personOgVerge.saker });
    });
  });
});

module.exports = casesController;
