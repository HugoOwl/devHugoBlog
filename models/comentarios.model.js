const mongoose = require('mongoose');
const DataSchema = new mongoose.Schema({
  conteudo: String,
  autor: String
}, {
  timestamps: true
});
const comentarios = mongoose.model('Comentarios', DataSchema);
module.exports = comentarios;