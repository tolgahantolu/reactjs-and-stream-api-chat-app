const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.js");

const app = express();

const PORT = process.env.PORT || 5000;

require("dotenv").config();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

//route
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/auth", authRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
