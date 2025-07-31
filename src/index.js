const express = require('express');

const {normaliseText, splitIntoChunks} = require('./app.js');

const app = express()
const port = process.env.PORT || 3021

app.use(express.json())

app.post('/', (req, res)=> {
    const {text} = req.body;
    const clean = normaliseText(text);
    const chunks = splitIntoChunks(clean);
    res.json({chunks});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});