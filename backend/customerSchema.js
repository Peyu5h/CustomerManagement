const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const customerSchema = new mongoose.Schema({
  id: {
    type: String,
    default: uuidv4,
    unique: true,
    required: true,
  },
  NAME: {
    type: String,
    required: true,
  },
  PHONE: {
    type: Number,
    required: true,
  },
  CUSTOMER_ID: {
    type: String,
    required: true,
  },
  STB_ID: {
    type: String,
    required: true,
  },
  ADDRESS: {
    type: String,
    required: true,
  },
  january: {
    type: String,
    default: "",
  },
  february: {
    type: String,
    default: "",
  },
  march: {
    type: String,
    default: "",
  },
  april: {
    type: String,
    default: "",
  },
  may: {
    type: String,
    default: "",
  },
  june: {
    type: String,
    default: "",
  },
  july: {
    type: String,
    default: "",
  },
  august: {
    type: String,
    default: "",
  },
  september: {
    type: String,
    default: "",
  },
  october: {
    type: String,
    default: "",
  },
  november: {
    type: String,
    default: "",
  },
  december: {
    type: String,
    default: "",
  },
  january_balance: {
    type: Number,
    default: null,
  },
  january_advance: {
    type: Number,
    default: null,
  },
  february_balance: {
    type: Number,
    default: null,
  },
  february_advance: {
    type: Number,
    default: null,
  },
  march_balance: {
    type: Number,
    default: null,
  },
  march_advance: {
    type: Number,
    default: null,
  },
  april_balance: {
    type: Number,
    default: null,
  },
  april_advance: {
    type: Number,
    default: null,
  },
  may_balance: {
    type: Number,
    default: null,
  },
  may_advance: {
    type: Number,
    default: null,
  },
  june_balance: {
    type: Number,
    default: null,
  },
  june_advance: {
    type: Number,
    default: null,
  },
  july_balance: {
    type: Number,
    default: null,
  },
  july_advance: {
    type: Number,
    default: null,
  },
  august_balance: {
    type: Number,
    default: null,
  },
  august_advance: {
    type: Number,
    default: null,
  },
  september_balance: {
    type: Number,
    default: null,
  },
  september_advance: {
    type: Number,
    default: null,
  },
  october_balance: {
    type: Number,
    default: null,
  },
  october_advance: {
    type: Number,
    default: null,
  },
  november_balance: {
    type: Number,
    default: null,
  },
  november_advance: {
    type: Number,
    default: null,
  },
  december_balance: {
    type: Number,
    default: null,
  },
  december_advance: {
    type: Number,
    default: null,
  },
  january_date: String,
  february_date: String,
  march_date: String,
  april_date: String,
  may_date: String,
  june_date: String,
  july_date: String,
  august_date: String,
  september_date: String,
  october_date: String,
  november_date: String,
  december_date: String,
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
