const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('Olá');
  res.send();
})

module.exports = router;