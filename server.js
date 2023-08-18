const express = require('express');
const app = express()
const port = 3000;

//route 
app.get('/', (req, res)=> {
    res.send(`
    <h1>99 cans of soda on the wall</h1>
    <a href="/98"> take one down, pass it around </a>`)
});

app.get('/:number_of_cans', (req, res)=> {
    const number_of_cans = req.params.number_of_cans
    if (req.params.number_of_cans > 0) {
        res.send(`
        <h1>${req.params.number_of_cans} cans of soda on the wall<h1>
        <a href="/${req.params.number_of_cans -1}">take one down, pass it around </a>`)
    }else {
        res.send(`
        <h1>${req.params.number_of_cans} cans of soda on the wall<h1>
        <a href="/">Start Over<a/>`);
     
    };
});
//listener
app.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
});