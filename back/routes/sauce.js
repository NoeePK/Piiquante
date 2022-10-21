// Importer express
const express = require('express');
// Créer router
const router = express.Router();
// Importer les middlewares
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
// Importer les contrôleurs
const sauceCtrl = require('../controllers/sauce');

// *****************************************

// Création d'une sauce
router.post('/', auth, multer, sauceCtrl.createSauce);

// Modification d'une sauce
router.put('/:id', auth, sauceCtrl.modifySauce);

// Suppression d'une sauce
router.delete('/:id', auth, sauceCtrl.deleteSauce);

// Récupération d'une sauce
router.get('/:id', auth, sauceCtrl.getOneSauce);

// Récupération de toutes les sauces
router.get('/', auth, sauceCtrl.getAllSauces);

// Système de likes/dislikes
router.post('/:id/like', auth, sauceCtrl.voteForSauce);

// Exporter le router
module.exports = router;