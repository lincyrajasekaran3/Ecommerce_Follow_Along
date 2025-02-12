const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }) // No need for useNewUrlParser or useUnifiedTopology
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
      console.log(data.Collection)
      console.log(data.Collection.find)
    })
    .catch((err) => {
      console.error(`Database connection failed: ${err.message}`);
      process.exit(1); // Exit process to avoid running with an invalid DB connection
    });
};

module.exports = connectDatabase;