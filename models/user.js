const mongoose = require("mongoose");
const Transaction = require("./transaction");

const customrSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true
    },
    Balance: Number,
    transactions:[{
        type: mongoose.Schema.Types.ObjectId, ref:"Transaction"}],
    contact:Number,
    SNo: Number
});

const Customer = mongoose.model("Customer", customrSchema);

module.exports = Customer;