const express = require('express');

const casesController = express.Router();

const soap = require('soap');

const wsdlURL = 'http://service.vmsak-prod.no/vms/MineVergemalServices?wsdl';

casesController.get('/:fnr', (req, res) => {
  soap.createClient(wsdlURL, (clientErr, client) => {
    client.hentPersonOgVerge({ fodselsnummer: req.params.fnr }, (callErr, result) => {
      if (callErr !== null) {
        console.log(`Error while calling MineVergemalServices hentPersonOgVerge: ${
          callErr.message
        }`);
        res.send({ cases: [] });
      }
      res.send({ cases: result.personOgVerge.saker });
    });
  });
});

casesController.get('/:fnr/:caseId', (req, res) => {
  soap.createClient(wsdlURL, (clientErr, client) => {
    const soapReq = { fodselsnummer: req.params.fnr, saksId: req.params.caseId };
    client.hentSak(soapReq, (callErr, result) => {
      if (callErr !== null) {
        console.log(`Error while calling MineVergemalServices hentSak: ${
          callErr.message
        }`);
        res.send({ case: [] });
      }
      res.send({ case: result.sak });
    });
  });
});

module.exports = casesController;
