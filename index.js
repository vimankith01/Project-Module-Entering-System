require('dotenv').config();
const express = require("express"); // Add "express" as an argument here
const app = express();
const cors = require("cors");
const connection  = require("./db");

//database connection
connection();

//middlewares
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
