const mongoose = require('mongoose');

const DroneSchema = new mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
});

let DroneModel = mongoose.model('myDrones', DroneSchema);
module.exports = DroneModel;
