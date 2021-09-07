const bodyParser = require('body-parser')
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const url = process.env.MONGO_URL
const { MONGO_CONNECT } = process.env;
mongoose.connect(MONGO_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,


}, function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('MongoDB conectado com sucesso')
  }
})
app.get('/', (req, res) => {
  res.send('funcionando')
})
const rotas = require('./rotas/routes')
app.use('/api', rotas)
app.use(express.static(__dirname + '/client'))
const port = 3001

app.listen(port, () => {
  console.log('server rodando em http://localhost:', port);
})