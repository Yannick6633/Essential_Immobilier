const express = require('express');
const router = express.Router();
const demeure_controller = require('../controllers/demeure.controller');

router.get('/', demeure_controller.demeure_list);
router.get('/:id', demeure_controller.demeure_detail);
router.post('/', demeure_controller.demeure_add);
router.put('/:id', demeure_controller.demeure_edit);
router.delete('/:id', demeure_controller.demeure_delete);

module.exports = router;
