module.exports = app => {

  const tutorials = require("../controllers/tutorial.controller");

  var router = require("express").Router();

  //Create a new Tutorial
  router.post("/", tutorials.create);

  

  //Retrieve all Tutorials
  router.get("/", tutorials.findAll);

  //Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  //Update a Tutorial with id
  router.put("/:id", tutorials.update);

  // //Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);

  //Patch a Tutorial with id
  router.patch("/:id", tutorials.update);

  //Delete all Tutorials
  router.delete("/", tutorials.deleteAll);

  //Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);

  app.use("/api/tutorials", router);


};
