const Comentario = require('../models/comentarios.model')
module.exports = {
  async index(req, res) {
    const comment = await Comentario.find();
    res.json(comment);
  },
  async create(req, res) {
    const { conteudo, autor } = req.body;
    let data = {};
    let comment = await Comentario.findOne({ conteudo });

    if (!comment) {
      data = { conteudo, autor };

      comment = await Comentario.create(data);
      return res.status(200).json(comment);
    } else {
      return res.status(500).json(comment);
    }
  },
  async details(req, res) {
    const { _id } = req.params;
    const comment = await Comentario.findOne({ _id });
    res.json(comment);
  },
  async delete(req, res) {
    const { _id } = req.params;
    const comment = await Comentario.findByIdAndDelete({ _id });
    return res.json(comment);
  },
  async update(req, res) {
    const { _id, conteudo, autor } = req.body;
    const data = { conteudo, autor };
    const comment = await Comentario.findOneAndUpdate({ _id }, data, { new: true });
    res.json(comment);
  }
}