const bodyParser = require('body-parser')
const express = require('express')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('funcionando')
})
const rotas = require('./rotas')
app.use('/api', rotas)
app.use(express.static(__dirname + '/client'))
const port = 3001
app.listen(port, () => {
  console.log('server aberto na porta 3001');
})