const mongoose = require('mongoose');

expenseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    expenseType: String,
    date: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    } 
});

module.exports = mongoose.model('Expense', expenseSchema);