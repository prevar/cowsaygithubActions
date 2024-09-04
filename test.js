const express = require('express');
const cowsay = require('cowsay');

const app = express();
const port = 3001;

app.get('/cowsay', (req,res)=>{
    const text = req.query.text || 'Hello from cowsay';
    const cow = cowsay.say({text});
    console.log('cow')
    res.send(`<pre>${cow} </pre>`);
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});




