const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Customer = require("./customerSchema");
const bodyParser = require("body-parser");
const cors = require("cors");

const mongoURL = process.env.VITE_MONGO_URL;

mongoose.connect(mongoURL, {});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async function () {
  console.log("Connected to MongoDB");
});

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

app.get("/", async function (req, res) {
  try {
    const searchTerm = req.query.search;
    const query = searchTerm
      ? { NAME: { $regex: new RegExp(searchTerm, "i") } }
      : {};

    const customers = await Customer.find(query);
    res.json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/id/:id", async function (req, res) {
  try {
    const id = req.params.id;
    const customer = await Customer.findOne({ id: id });

    if (!customer) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.json(customer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/update/:id", async function (req, res) {
  try {
    const id = req.params.id;
    const updateData = req.body;

    const updatedCustomer = await Customer.findOneAndUpdate(
      { id: id },
      { $set: updateData },
      { new: true }
    );

    if (!updatedCustomer) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.json(updatedCustomer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/update/:id", async function (req, res) {
  try {
    const id = req.params.id;
    const updateData = req.body;

    const updatedCustomer = await Customer.findOneAndUpdate(
      { id: id },
      { $set: updateData },
      { new: true }
    );

    if (!updatedCustomer) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.json(updatedCustomer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
