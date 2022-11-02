const plants = require('./db.json')
const path = require("path")

module.exports = {

    getPlant: (req, res) => {
      
        let randomIndex = Math.floor(Math.random() * plants.length);
        let randomPlant = plants[randomIndex];
      
        res.status(200).send(randomPlant);
    },

    home: (req, res) => {
        res.sendFile(path.join(__dirname, "../../index.html"))
    },

    styles: (req, res) => {
        res.sendFile(path.join(__dirname, "../../styles.css"))
    },

    javascript: (req, res) => {
        res.sendFile(path.join(__dirname, "../../main.js"))
    }

}