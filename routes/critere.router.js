const express = require('express');
const router = express.Router();
const critere_controller = require('../controllers/critere.controller');

router.get('/', critere_controller.critere_list);
router.get('/:id', critere_controller.critere_detail);
router.post('/', critere_controller.critere_add);
router.put('/:id', critere_controller.critere_edit);
router.delete('/:id', critere_controller.critere_delete);

module.exports = router;
