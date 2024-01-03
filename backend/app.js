const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Customer = require("./customerSchema");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const CsvParser = require("json2csv").Parser;

const mongoURL = process.env.VITE_MONGO_URL;

mongoose.connect(mongoURL, {});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async function () {
  console.log("Connected to MongoDB");
});

app.use(bodyParser.json());
app.use(cors());

//Searching
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

//Finding Particular User
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

//Updating Data of Particular User
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

//Exporting Data as CSV
app.get("/exportUsers", async function (req, res) {
  try {
    let users = [];
    var userData = await Customer.find({});

    if (userData && Array.isArray(userData)) {
      userData.forEach((user) => {
        const {
          NAME,
          PHONE,
          CUSTOMER_ID,
          STB_ID,
          ADDRESS,
          january,
          february,
          march,
          april,
          may,
          june,
          july,
          august,
          september,
          october,
          november,
          december,
        } = user;

        users.push({
          NAME,
          PHONE,
          CUSTOMER_ID,
          STB_ID,
          ADDRESS,
          january,
          february,
          march,
          april,
          may,
          june,
          july,
          august,
          september,
          october,
          november,
          december,
        });
      });

      const csvFields = [
        "NAME",
        "PHONE",
        "CUSTOMER_ID",
        "STB_ID",
        "ADDRESS",
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december",
      ];
      const csvParser = new CsvParser({ csvFields });
      const csvData = csvParser.parse(users);

      res.setHeader("Content-Type", "text/csv");
      res.setHeader(
        "Content-Disposition",
        "attachment; filename=usersData.csv"
      );

      res.status(200).end(csvData);
    } else {
      res.send({
        status: 404,
        success: false,
        msg: "No user data found",
      });
    }
  } catch (error) {
    res.send({ status: 400, success: false, msg: error.message });
  }
});

// Create a new user
app.post("/addUser", async function (req, res) {
  try {
    const allowedFields = ["NAME", "PHONE", "CUSTOMER_ID", "STB_ID", "ADDRESS"];

    const userData = req.body;

    const filteredUserData = allowedFields.reduce((obj, key) => {
      obj[key] = userData[key] || "";
      return obj;
    }, {});

    const newUser = new Customer(filteredUserData);

    await newUser.save();

    res.status(201).json({
      status: 201,
      success: true,
      msg: "User added successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(400).json({ status: 400, success: false, msg: error.message });
  }
});

//delete user

app.delete("/delete", async function (req, res) {
  try {
    const id = req.query.id;

    const deletedUser = await Customer.findOneAndDelete({ id: id });

    if (!deletedUser) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.json(deletedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
