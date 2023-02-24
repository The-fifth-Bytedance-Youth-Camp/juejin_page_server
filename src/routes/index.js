const express = require('express');
const router = express.Router();
const banners = require('../data/banner.json')

/* GET users listing. */
router.get('/banner', function(req,res) {
  res.json({
    code:200,
    banners
  })
});

module.exports = router;
