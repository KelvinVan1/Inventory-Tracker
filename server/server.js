const path = require('path');
const express = require('express');

const app = express();

//const apiRouter = require('./routes/api');

const PORT = 3000;

//Handle parsing the request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Route Handlers
//app.use('/api', apiRouter);

//Base App handler
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/api', (req, res) => {
  console.log('API');
  return res.status(200).send({name: 'Kelvin'});
});

//Catch-all route handler
app.use('*', (req, res) => {
  res.sendStatus(404);
});

//Start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;