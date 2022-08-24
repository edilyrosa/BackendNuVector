const express = require("express");
const app = express(); //Express
const cors = require("cors"); //Conexion con FRONT
const config = require("./config");
const path = require('path')
const db = require("./models"); //db represents the BBDD

app.use(express.urlencoded({ extended: true })); //MiddleWare
app.use(express.json());
app.use(express.static("public"));
app.use(cors(config.application.cors.server));

const router = express.Router();

//Routers:
const routerClient = require("./routes/Client");
router.use("/client", routerClient);

const routerProject = require("./routes/Project");
router.use("/project", routerProject);

const routerContractor = require("./routes/Contractor");
router.use("/contractor", routerContractor);

const routerProduct = require("./routes/Product");
router.use("/product", routerProduct);

const routerActivity = require("./routes/activity");
router.use("/activity", routerActivity);

const routerCategory = require("./routes/Category");
router.use("/category", routerCategory);

const routerTaskentry = require("./routes/TaskEntry");
router.use("/taskentry", routerTaskentry);

app.use("/api", router);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(process.env.PORT || 5000, () =>
  console.log("Server running on port 5000")
);
