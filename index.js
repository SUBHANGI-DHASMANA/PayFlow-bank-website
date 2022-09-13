const mongoose = require("mongoose");
const Customer = require("./models/user");

mongoose.connect('mongodb://localhost:27017/bankDB');

const v = async() => {
    await Customer.deleteMany({});
    await Customer.insertMany([
        {username: "Subhangi", email: "subhangi@gmail.com", Balance: 60000, contact: 1234567890, SNo: 1},
        {username: "Shaurya", email: "shaurya@gmail.com", Balance: 78000, contact: 0987654321, SNo: 2},
        {username: "Rohit", email: "rohit@gmail.com", Balance: 1100, contact: 4455662233, SNo: 3},
        {username: "Priya", email: "priya@gmail.com", Balance: 12000, contact: 1122334455, SNo: 4},
        {username: "Diljit", email: "diljit@gmail.com", Balance: 500, contact: 5544332211, SNo: 5},
        {username: "Shreya", email: "shreya@gmail.com", Balance: 120000, contact: 1010202030, SNo: 6},
        {username: "Ayush", email: "ayush@gmail.com", Balance: 96000, contact: 1238887890, SNo: 7},
        {username: "Arihant", email: "arihant@gmail.com", Balance: 83000, contact: 3652567890, SNo: 8},
        {username: "Mansi", email: "mansi@gmail.com", Balance: 1000, contact: 1234578940, SNo: 9},
        {username: "Neha", email: "neha@gmail.com", Balance: 38000, contact: 1111100056, SNo: 10},
    ]);
};

v();