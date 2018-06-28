const express = require('express');

const casesController = express.Router();

const soap = require('soap');

const wsdlURL = 'http://service.vmsak-prod.no/vms/MineVergemalServices?wsdl';

casesController.get('/:fnr', (req, res) => {
  soap.createClient(wsdlURL, (clientErr, client) => {
    res.send({
      cases: [{
        dufNr: '12342398700', etternavn: 'Bø', fornavn: 'Christian', saksId: '206392'
      }, {
        dufNr: '5234520906701', etternavn: 'Flatteland', fodselsnr: '79904075733', fornavn: 'Hallvard', mellomnavn: '', saksId: '246715'
      }, {
        dufNr: '5234175671301', etternavn: 'Ololoev', fodselsnr: '05009872572', fornavn: 'Ololoenko', mellomnavn: 'Mellomnavnsen', saksId: '248220'
      }, {
        dufNr: '0878760441401', etternavn: 'Testensonn', fodselsnr: '10030175430', fornavn: 'Tets', mellomnavn: '', saksId: '242572'
      }]
    });
    /* client.hentPersonOgVerge({ fodselsnummer: req.params.fnr }, (callErr, result) => {
      if (callErr !== null) {
        console.log(`Error while calling MineVergemalServices hentPersonOgVerge: ${
          callErr.message
        }`);
        res.send({ cases: [] });
      }
      res.send({ cases: result.personOgVerge.saker });
    }); */
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
