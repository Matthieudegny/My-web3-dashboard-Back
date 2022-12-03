require("dotenv").config();

const express = require("express");
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

//listen for request
app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});
