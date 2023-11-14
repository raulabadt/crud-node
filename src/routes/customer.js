const express = require('express');
const router = express.Router();

const customerController=require('../controllers/customerController');

router.get('/', customerController.list);
router.post('/add', customerController.save );
// router.get('/delete', customerController.delete);

module.exports = router;