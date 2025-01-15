const express = require('express');
const app = express();
  app.listen(3000, () => {
  console.log('Server is listening on port 3000');
  });

  app.get('/', (req, res) => {  
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello World!');
  })
  app.get('/customHeader', (req, res) => {
    // header in request
    console.log(req.headers);

    // header in response
    res.setHeader('X-myName', 'Rohan Maiti'); // when ever write custome header name should start with 'X-' || good practice
    res.status(200).send('Hello World!');
  })

  app.post('/customHeader', (req, res) => {
    // header in request
    console.log(req.headers); // see this there content-type: will be added

    // header in response
    res.setHeader('X-myName', 'Rohan Maiti'); // when ever write custome header name should start with 'X-' || good practice
    res.send('Hello World!');
  })