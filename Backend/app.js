const express = require('express');
const mongoose = require('mongoose');
const router = require("./Routes/UserRoutes");
const app = express();

// Middleware
app.use(express.json()); // To parse JSON bodies
app.use("/users",router);


//Database Connection
mongoose.connect("mongodb+srv://Admin:Bookstore1234@cluster0.ljmf1p3.mongodb.net/")

.then(() =>console.log("Connected to MongoDB"))
.then(() => {
    app.listen(5000);
})

.catch((err) => console.log((err)))
