const express = require("express");
const app = express(); //Express
const cors = require("cors"); //Conexion con FRONT
const config = require("./config");
const db = require("./models"); //db represents the BBDD

app.use(express.urlencoded({ extended: true })); //MiddleWare
app.use(express.json());
app.use(cors(config.application.cors.server));

//Routers:
const routerClient = require("./routes/Client");
app.use("/client", routerClient);

const routerProject = require("./routes/Project");
app.use("/project", routerProject);

const routerContractor = require("./routes/Contractor");
app.use("/contractor", routerContractor);

const routerProduct = require("./routes/Product");
app.use("/product", routerProduct);

const routerActivity = require("./routes/activity");
app.use("/activity", routerActivity);

const routerCategory = require("./routes/Category");
app.use("/category", routerCategory);

const routerTaskentry = require("./routes/TaskEntry");
app.use("/taskentry", routerTaskentry);
app.listen(process.env.PORT || 5000, () =>
  console.log("Server running on port 5000")
);
