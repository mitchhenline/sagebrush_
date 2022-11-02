const express = require("express")
const cors = require("cors")
require("dotenv").config()


const app = express()

app.use(express.json())

app.use(cors())

const {home, styles, javascript} = require("./controllers/controller")

app.get("/", home)
app.get("/css", styles)
app.get("/javascript", javascript)

const { PORT } = process.env

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

const { getPlant } = require('./controllers/controller')

app.get("/api/plant", getPlant);