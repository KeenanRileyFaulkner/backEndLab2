const express = require('express');
const cors = require('cors');
const controller = require('./controller.js')
const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/houses", (req, res) => controller.getHouses(req, res));
app.post("/api/houses", (req, res) => controller.createHouse(req, res));
app.put("/api/houses/:id", (req, res) => controller.updateHouse(req, res));
app.delete("/api/houses/:id", (req, res) => controller.deleteHouse(req, res));


app.listen(4004, () => console.log('The server is running on port 4004'));