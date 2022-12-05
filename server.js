require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const dashboardRoutes = require("./routes/dashboard");

//express app
const app = express();

//middleware
//pour accéder aux bodys des requests
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/dashboard", dashboardRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //je commence à recevoir les requêtes uniquement après avoir été connecté à la DB
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

//mongoose = ODM object data modeling
