require('dotenv').config();
const express = require("express"); // Add "express" as an argument here
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
// const userRoutes = require('./routes/users');
const authRoutes = require("./routes/Auth");
// const { default: validateToken } = require('./middleware/JwtValidation');
const validateToken = require('./middleware/JwtValidation');


//middlewares
app.use(express.json());
app.use(cors());

//routes
// app.use("/api/users", userRoutes);
app.use("/api/auth",validateToken, authRoutes);


// Use the validateToken middleware for protected routes
app.get('/protected', validateToken, (req, res) => {
  res.send('You are authenticated!');
});

const port = process.env.PORT || 8080;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("MongoDB Connected...");
    app.listen(port, () => {
      console.log("Server is running!");
    });
  })
  .catch((err) => console.log(err));
