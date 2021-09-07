const mongoose = require('mongoose');
const DataSchema = new mongoose.Schema({
  titulo: String,
  conteudo: String,
  autor: String,
}, {
  timestamps: true
});
const postagens = mongoose.model('Postagens', DataSchema);
module.exports = postagens;