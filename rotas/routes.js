
const express = require('express');
const comments = require('../controllers/comentarios');
const postagens = require('../controllers/postagens');
const router = express.Router();
router.get('/comments', comments.index);
router.get('/post', postagens.index);
router.post('/comments/create', comments.create);
router.post('/post/create', postagens.create);
router.get('/postagens.details/:_id', postagens.details);
router.get('/comments.details/:_id', comments.details);

router.delete('/comments/:_id', comments.delete);
router.delete('/post/:_id', postagens.delete);
router.put('/comments/', comments.update);
router.put('/postagens/', postagens.update);
module.exports = router
