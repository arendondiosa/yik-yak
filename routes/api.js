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

router.get('/:resource/:id', (req, res, next) => {
  const resource = req.params.resource;
  const id = req.params.id;

  if (resource === 'zone') {
    ZoneController.findById(id, (err, result) => {
      if (err) {
        res.json({
          confirmation: 'fail',
          message: 'Not found'
        });
        return
      }

      res.json({
        confirmation: 'success',
        results: result
      });
    });
  }
});

module.exports = router;