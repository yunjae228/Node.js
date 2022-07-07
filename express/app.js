import express from 'express'

const app = express()

const PORT = 4000

app.get('/', (req,res) => {
    res.send('hello express')
})

app.listen(PORT, () => {
    console.log(`Server is Listening at ${PORT}`)
})