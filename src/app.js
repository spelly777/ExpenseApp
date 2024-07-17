const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Expense = require('./models/expense');
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
mongoose.set('strictQuery', false);
const PORT = process.env.PORT || 3000;
const CONNECTION = process.env.CONNECTION;


const expense = new Expense({
    name: "Chick fil-a",
    expenseType: "food",
    cost: 10,
    date: "05/16/24"
});
expense.save();

app.get('/newexpense', async (req, res)=> {
    try{
        const result = await Expense.find();
        res.send({"expenses": result});
    } catch(e) {
        res.status(500).json({error: e.message});
    }
})

app.post('/', (req, res)=> {
    res.send('Welcome!');
})

app.post('/newexpense', async (req, res) => {
    console.log(req.body);
    const expense = new Expense(req.body);
    try {
        await expense.save();
        res.status(201).json({expense});
    } catch(e) {
        res.status(400).json({error: e.message});
    }
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


