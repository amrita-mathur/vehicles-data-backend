const mongoose = require("mongoose");

const { Schema } = mongoose;
const { Model } = mongoose;

const vehicleSchema = new Schema({
  id: Number,  
  vin: String, 
  make: String,
  model: String,
  year: Number,
  image: String
  
});

const vehicleModel = new Model("vehicle", vehicleSchema)

export default vehicleModel;