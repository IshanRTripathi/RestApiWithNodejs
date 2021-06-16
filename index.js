const express = require('express');
const app = express();
const PORT = 9999;

app.use(express.json());
app.listen(PORT, ()=> console.log(`App is live on port: ${PORT}`));

var tshirts= [
    {
        tshirt: 'half',
        size: 'small'
    },
    {
        tshirt: 'full',
        size: 'medium'
    }
];

var tshirtIndex=tshirts.length+1;
app.get('/tshirt', (req, res)=>{
    console.log("get /tshirt triggered");
    res.status(200).send(tshirts);
});

app.get('/tshirt/:index', (req, res)=>{
    const {index}= req.params;
    console.log("get /tshirt triggered");

    if(index>=tshirts.length){
        res.status(488).send(console.log("Index not present"));
        process.exit(1);
    }

    res.status(200).send(tshirts[index]);
});

app.post('/tshirt/add', (req, res)=>{
    const {id} = req.params;
    const {tshirt} = req.body;
    const {size} = req.body;

    res.send({
        tshirt: tshirt,
        size: size,
        id:`${tshirtIndex}`
    });
    tshirts.push({
        tshirt: tshirt,
        size: size
    });
    tshirtIndex++;
    console.log("Tshirt addedd succsesfully !");
});

app.post('/tshirt/:id', (req, res)=>{
    const {id} = req.params;
    const {logo} = req.body;

    res.send({
        tshirt:'POLO',
        size:'Large',
        id:`${id}`
    });
});

app.post('/tshirt/:id/:name', (req, res)=>{
    const {id} = req.params;
    const {name} = req.params;
    console.log(`Name of tshirt company added in request : ${name}`);
    //const {logo} = req.body;

    res.send({
        tshirt:`${name}`,
        size:'Large',
        id:`${id}`
    });
})