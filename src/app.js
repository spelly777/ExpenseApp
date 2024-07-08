const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
mongoose.set('strictQuery', false);
const PORT = process.env.PORT || 3000;
const CONNECTION = process.env.CONNECTION;


app.get('/', (req, res)=> {
    res.send("Hello world.");
})

app.post('/', (req, res)=> {
    res.send('post request');
})

app.post('/newexpense', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

const start = async() => {
    try {
        await mongoose.connect(CONNECTION);

        app.listen(PORT, () => {
            console.log('App is listening on port ' + PORT);
        });
    }
    catch(error) {
        console.log(error.message);
    }
};

start();


