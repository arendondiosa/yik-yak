const express = require('express');
const router = express.Router();
const ZoneController = require('../controllers/ZoneController');

router.get('/:resource', (req, res, next) => {
  const resource = req.params.resource;

  if (resource === 'zone') {
    ZoneController.find(req.query, (err, results) => {
      if (err) {
        res.json({
          confirmation: 'fail',
          message: err
        });
        return
      }
      
      res.json({
        confirmation: 'success',
        results: results
      });
    });
  }
});

module.exports = router;