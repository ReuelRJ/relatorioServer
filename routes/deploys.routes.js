const express = require('express');
const router = express.Router();
const deploy = require('../controllers/deploy.controller');

router.get('/', deploy.getAllDeploys );
router.post('/', deploy.createDeploy);
router.get('/:id', deploy.getByid);
router.put('/:id', deploy.editDeploy);
router.delete('/:id', deploy.deleteDeploy)

module.exports = router;