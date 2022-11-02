const plants = require('./db.json')

module.exports = {

    getPlant: (req, res) => {
      
        let randomIndex = Math.floor(Math.random() * plants.length);
        let randomPlant = plants[randomIndex];
      
        res.status(200).send(randomPlant);
    }

}