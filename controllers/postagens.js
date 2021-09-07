const Postagem = require('../models/postagens.model')
module.exports = {
  async index(req, res) {
    const post = await Postagem.find();
    res.json(post);
  },
  async create(req, res) {
    const { titulo, conteudo, autor } = req.body;
    let data = {};
    let post = await Postagem.findOne({ titulo });

    if (!post) {
      data = { titulo, conteudo, autor };

      post = await Postagem.create(data);
      return res.status(200).json(post);
    } else {
      return res.status(500).json(post);
    }
  },
  async details(req, res) {
    const { _id } = req.params;
    const post = await Postagem.findOne({ _id });
    res.json(post);
  },
  async delete(req, res) {
    const { _id } = req.params;
    const post = await Postagem.findByIdAndDelete({ _id });
    return res.json(post);
  },
  async update(req, res) {
    const { titulo, conteudo, autor } = req.body;
    const data = { titulo, conteudo, autor };
    const post = await Postagem.findOneAndUpdate({ _id }, data, { new: true });
    res.json(post);
  }
}