const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/bankDB');

const transactionSchema = new mongoose.Schema({
    Date: Date,
    Amount: Number,
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;