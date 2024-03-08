const express = require("express");
const bodyParser = require("body-parser");
const userrouter = require("./route/user");
const app = express();
const connectDB = require("./db");
const cors = require('cors'); 
const url =
  "mongodb+srv://Aaqib:Nelofar@cluster0.bxk1a9b.mongodb.net/Token?retryWrites=true&w=majority&appName=Cluster0";
  connectDB(url)
  app.use(cors());
app.use(bodyParser.json());

// Define routes
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.use("/api", userrouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
