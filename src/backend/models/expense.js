const mongoose = require('mongoose');

expenseSchema = new mongoose.Schema({
    name: String,
    expenseType: String,
    cost: double
});

module.exports = mongoose.model('Expense', expenseSchema);