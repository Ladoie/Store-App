const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/store", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
  });

Product.insertMany([
  { name: "Apple", price: 1.99, category: "fruit" },
  { name: "Milk", price: 2.99, category: "dairy" },
  { name: "Carrot", price: 0.99, category: "vegetable" },
  { name: "Orange", price: 1.29, category: "fruit" },
  { name: "Cheese", price: 4.99, category: "dairy" },
  { name: "Broccoli", price: 1.79, category: "vegetable" },
])
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
