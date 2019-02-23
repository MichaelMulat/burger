var express = require("express");

var router = express.Router();

var burger = require("../models/burgers");

// Create Routes
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var handlebarObj = {
      burgers: data
    };

    res.render("index", handlebarObj);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne(
    ["burger_name", "devoured"], //cols
    [req.body.burger_name, req.body.devoured], //vals
    function(result) { //callback
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id", function(req, res) {
  var cond = "id = " + req.params.id;

  burger.updateOne(
    { devoured: req.body.devoured }, // objectColVals
    cond, // condition
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
