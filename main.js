const plantBtn = document.getElementById("plantButton")
const plantInfoBox = document.getElementById("plant-info-box")

const getPlant = () => {
    axios.get("http://localhost:4545/api/plant/")
        .then(res => {
            const data = res.data;
            createPlantCard(data)
    })
};




function createPlantCard(plant){
    const plantCard = document.createElement('div')
    plantCard.classList.add('plant-card')

    plantCard.innerHTML = `<img alt="plant picture" src=${plant.imageURL} class="plant-picture"/>
    <p class ="plant-title">${plant.title}</p>
    <p class ="scientific-name">${plant.sName}</p>
    <p class ="plant-type">Type: ${plant.type}</p>
    </div>`

    plantInfoBox.appendChild(plantCard)
};

plantBtn.addEventListener('click', getPlant)