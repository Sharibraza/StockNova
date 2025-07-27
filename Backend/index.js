require("dotenv").config();

// .env
const port = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

// Packages
const express = require('express');
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute.js");

// models
const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");


// middlewares
app.use(cors({
    origin: ["https://stocknova-frontend.onrender.com","https://stocknova-dashboard.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/", authRoute);



// -----------------------------------

app.listen(port, async () => {
    console.log('App started!');
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("MongoDB is  connected successfully"))
        .catch((err) => console.error(err));
});

app.get("/allholdings", async (req, res) => {
    let allholdings = await HoldingsModel.find({});
    res.json(allholdings);
});

app.get("/allpositions", async (req, res) => {
    let allpositions = await PositionsModel.find({});
    res.json(allpositions);
});

app.get("/allorders", async (req, res) => {
    let allorders = await OrdersModel.find({});
    res.json(allorders);
});

app.post("/newOrder", async (req, res) => {
    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0];

    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
        time: timeStr
    });

    newOrder.save();
});
