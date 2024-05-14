const express = require("express");

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://amritamathur:Iloverahul24@cluster0.7d4xbmx.mongodb.net/vehicles")
const app = express();

const PORT = 3001;

const {getAllVehicles, getVehicleDetails} = require("./controllers/vehicleController");

app.get("/", (request, response)=> {
    response.send("Vehicles");
})

app.get("/vehicles", getAllVehicles);

app.get("/vehicles/:id", getVehicleDetails)


app.listen(PORT, ()=> {
    console.log(`Server is running at ${PORT}`)
})