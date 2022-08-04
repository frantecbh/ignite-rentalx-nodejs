import express from 'express'


const app = express()

app.get("/", (request, response) => {
    return response.json({ message: "Ola Frantec" })
})


app.listen(3333, () => {
    console.log("Server-on port 3333")
})


