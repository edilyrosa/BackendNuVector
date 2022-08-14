var createError = require("http-errors");
var path = require("path");
const express = require("express");
const app = express(); //Express
const cors = require("cors"); //Conexion con FRONT
const config = require("./config");
app.use(express.urlencoded({ extended: true })); //MiddleWare
app.use(express.json());
app.use(cors(config.application.cors.server));
const db = require("./models"); //db represents the BBDD

//Routers:
const routerClient = require("./routes/Client");
app.use("/client", routerClient);

const routerProject = require("./routes/Project");
app.use("/project", routerProject);

const routerContractor = require("./routes/Contractor");
app.use("/contractor", routerContractor);

const routerProduct = require("./routes/Product");
app.use("/product", routerProduct);

const routerActivity = require("./routes/Activity");
app.use("/activity", routerActivity);

const routerCategory = require("./routes/Category");
app.use("/category", routerCategory);

const routerTaskentry = require("./routes/Taskentry");
app.use("/taskentry", routerTaskentry);
app.use(cors());
app.listen(5000, () => console.log("Server running on port 5000"));
//db.sequelize.sync().then(() => {
//Start the API in a PORT
//});
