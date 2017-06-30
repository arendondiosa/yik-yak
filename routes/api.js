const express = require('express');
const router = express.Router();
const ZoneController = require('../controllers/ZoneController');
const controllers = require('../controllers');

router.get('/:resource', (req, res, next) => {
  const resource = req.params.resource;
  const controller = controllers[resource];

  if (controller == null) {
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource Request: ' + controller
    });
  }

  controller.find(req.query, (err, results) => {
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
});

router.get('/:resource/:id', (req, res, next) => {
  const resource = req.params.resource;
  const id = req.params.id;

  const controller = controllers[resource];

  if (controller == null) {
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource Request: ' + controller
    });
  }

  controller.findById(id, (err, result) => {
    if (err) {
        res.json({
          confirmation: 'fail',
          message: err
        });
        return
      }

      res.json({
        confirmation: 'success',
        results: result
      });
  });
});

router.post('/:resource', (req, res, next) => {
  const resource = req.params.resource;
  const controller = controllers[resource];

  if (controller == null) {
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource Request: ' + controller
    });
  }

  controller.create(req.body, (err, result) => {
    if (err) {
      res.json({
        confirmation: 'fail',
        message: err
      });
      return
    }

    res.json({
      confirmation: 'success',
      results: result
    });
  });
});

module.exports = router;