const db = require("./db.json");

let upcomingHouseID = 4;

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(db);
    },

    deleteHouse: (req, res) => {
        let id = Number(req.params.id);
        for(let i = 0; i < db.length; ++i) {
            if(db[i].id === id) {
                db.splice(i, 1);
                res.status(200).send(db);
                return;
            }
        }
        res.status(400).send("House not found. Could not remove it from the database.");
    },

    createHouse: (req, res) => {
        let newHouse = req.body;
        newHouse.id = upcomingHouseID;
        upcomingHouseID++;
        newHouse.price = Number(newHouse.price);
        db.push(newHouse);
        res.status(200).send(db);
    },

    updateHouse: (req, res) => {
        let id = Number(req.params.id);
        let type = req.body.type;
        if(type !== 'plus' && type !== 'minus') {
            res.status(400).send("There appears to be a typo in the main.js request's type param. Request could not be handled.");
        }
        let updateIndex = db.findIndex(house => house.id === id);
        (type === 'plus') ? db[updateIndex].price += 10000 : db[updateIndex].price -= 10000;
        res.status(200).send(db);
    }
}
