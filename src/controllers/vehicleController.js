const vehicleModel = require("../models/VehicleModel");

export const getAllVehicles = (req, res) => {
    const vehicles = vehicleModel.find();
    res.send({"vehicles": vehicles})
}

export const getVehicleDetails = (req, res) => {
    const {id} = req.params.id;
    const vehicle = vehicleModel.findOne({id: id});
    res.send({"vehicle": vehicle})
}

const {getAllVehicles, getVehicleDetails} = module.exports;
