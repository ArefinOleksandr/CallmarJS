var express = require('express');
var router = express.Router();
const path = require('path');;
const React = require('react');
const ReactDOMServer = require('react-dom/server')

/* GET home page. */
router.get('/', function(req, res, next) {
  // const app = ReactDOMServer.renderToStaticNodeStream(<Index />);
  // app.pipe(res);
  // const indexFile = path.resolve('../client/index.html');

  // fs.readFile(indexFile, 'utf8', (err, data) => {
  //   if(err){
  //     console.error('Something went wrong', err);
  //     return res.status(500).send('Oops, better luck next time!');
  //   }

  //   return res.send(data.replace('<div id="root"></div>', `<div id="root">${app}</div>`))
  //  })

});

module.exports = router;
