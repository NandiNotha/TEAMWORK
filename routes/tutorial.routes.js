module.export = app =>{
const tutorials = require(".../controllers/tutorial.controller.js");

var router = require("express").Router();

route.post("./", tutorials.create);

route.get("./", tutorials.findAll);

route.get("/:id", tutorials.findOne);

route.get("./published", tutorials.findAllPublished);

route.put("/:id", tutorials.update);

route.delete("/:id", tutorials.delete);

route.delete("/", tutorials.deleteAll);

app.use("/api/tutorials", router)
}