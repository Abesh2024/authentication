const express = require("express");
const mongoose = require("mongoose");
const nodemon = require("nodemon");

const authRoutes = require("./routes/userauth")

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/RegisteredUser")
.then(() => console.log("Connection with Database established successfully"))
.catch((err) => console.log("CONNECTION FAILED", err))


app.use(authRoutes);

app.listen(6000, () => {
    console.log("server is up and running on port 6000");
})
