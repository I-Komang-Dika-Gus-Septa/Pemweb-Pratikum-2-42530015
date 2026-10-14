const express = require('express');
const router = express.Router();
const pageController = require('../controllers/page.controller.js');

router.get('/', pageController.getBeranda);
router.get('/katalog', pageController.getKatalog);

// Endpoint HTTP POST untuk form
router.post('/katalog/tambah', pageController.postTambahProduk);

module.exports = router;