const express = require("express")
const cardRouter = require("./application/controllers/cardController")

const app = express()
const port = 3000


app.use('/card',cardRouter)

app.listen(port, ()=>{
    console.log(`App listening at port: ${port} `)
})
