const express = require('express')
//const res = require('express/lib/response')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json([{

    name: "Bob",
    email: "bob@example.com"
}]))

app.listen(port, () => console.log(`Example app listening on port ${port}`))