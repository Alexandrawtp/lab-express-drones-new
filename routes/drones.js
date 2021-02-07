const express = require('express');
const DroneModel = require('../models/Drone.model.js');

// require the Drone model here

const router = express.Router();

router.get('/drones', (req, res, next) => {
  DroneModel.find()
    .then((drones) => res.render('drones/list.hbs', {
      drones
    }))
    .catch((error) => console.log(error))
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  const {
    inputName,
    inputPropellers,
    inputMaxSpeed
  } = req.body;

  let newDrone = {
    name: inputName,
    propellers: inputPropellers,
    maxSpeed: inputMaxSpeed
  };

  DroneModel.create(newDrone)
    .then(() => res.redirect('/drones'))
    .catch(() => res.render('drones/create-form.hbs'))
});

router.get('/drones/:id/edit', (req, res, next) => {
  let { params: { id } } = req;
  DroneModel.findById(id)
    .then((drone) => res.render('drones/update-form.hbs', { drone }))
    .catch(() => console.log('Impossible to find this drone.'))
});

router.post('/drones/:id/edit', (req, res, next) => {
  let { params: { id } } = req;

  const {
    inputName,
    inputPropellers,
    inputMaxSpeed
  } = req.body;

  let editedDrone = {
    name: inputName,
    propellers: inputPropellers,
    maxSpeed: inputMaxSpeed
  };

  DroneModel.findByIdAndUpdate(id, editedDrone)
    .then(() => res.redirect('/drones'))
    .catch(() => res.render('drones/update-form.hbs'))
});

router.post('/drones/:id/delete', (req, res, next) => {
  let { params: { id } } = req;
  DroneModel.findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(() => console.log('Delete failed!'))
});

module.exports = router;