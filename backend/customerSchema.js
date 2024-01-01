const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  id: {
    type: String,
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
  },
  february: {
    type: String,
  },
  march: {
    type: String,
  },
  april: {
    type: String,
  },
  may: {
    type: String,
  },
  june: {
    type: String,
  },
  july: {
    type: String,
  },
  august: {
    type: String,
  },
  september: {
    type: String,
  },
  october: {
    type: String,
  },
  november: {
    type: String,
  },
  december: {
    type: String,
  },
  january_balance: {
    type: Number,
  },
  january_advance: {
    type: Number,
  },
  february_balance: {
    type: Number,
  },
  february_advance: {
    type: Number,
  },
  march_balance: {
    type: Number,
  },
  march_advance: {
    type: Number,
  },
  april_balance: {
    type: Number,
  },
  april_advance: {
    type: Number,
  },
  may_balance: {
    type: Number,
  },
  may_advance: {
    type: Number,
  },
  june_balance: {
    type: Number,
  },
  june_advance: {
    type: Number,
  },
  july_balance: {
    type: Number,
  },
  july_advance: {
    type: Number,
  },
  august_balance: {
    type: Number,
  },
  august_advance: {
    type: Number,
  },
  september_balance: {
    type: Number,
  },
  september_advance: {
    type: Number,
  },
  october_balance: {
    type: Number,
  },
  october_advance: {
    type: Number,
  },
  november_balance: {
    type: Number,
  },
  november_advance: {
    type: Number,
  },
  december_balance: {
    type: Number,
  },
  december_advance: {
    type: Number,
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
