const express = require('express');
const router = express.Router();
const path = require('path');
const dbo = require("../db/conn");

// this will get all users
router.route("/users").get(function (req, res) {
    let db_connect = dbo.getDb("CinemaDB");
    db_connect.collection("Users").find({})
    .toArray(function (err, result) {
    if (err) {
        window.alert(err);
        throw err;
    }
    res.json(result);
    });
});

// This section will help you get a single record by id
router.route("/users/email").post(function (req, res) {
    let db_connect = dbo.getDb("CinemaDB");
    let checkEmail = { email: req.body.email };
    let pass = { password: req.body.password };
    db_connect
    .collection("Users")
    .findOne(checkEmail, function (err, result) {
        if (err) {
            console.log("Invalid email");
            throw err;
        } else {
            if (pass.password == result.password) {
                res.json(result);
            } else {
                console.log("Username or Password is incorrect. Please try again.");
            }
        }
    });
});


// This section will help you create a new user
router.route("/users/add").post(function (req, response) {
    let db_connect = dbo.getDb("CinemaDB");
    let myobj = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        number: req.body.number,
        status: req.body.status,
        rememberMe: req.body.rememberMe,
    };

    //checks if email is already existing within the database
    let checkEmail = {email: req.body.email};
    db_connect.collection("Users").findOne(checkEmail, function(err, res) {
        if (err) {
        } else {
            //if email is in database, sends the following error message
            console.log("User with given email already exists");
            return;
        }
    });

    db_connect.collection("Users").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
    });
});


module.exports = router;


// const express = require("express");
 
// // recordRoutes is an instance of the express router.
// // We use it to define our routes.
// // The router will be added as a middleware and will take control of requests starting with path /record.
// const recordRoutes = express.Router();
 
// // This will help us connect to the database
// const dbo = require("../db/conn");
 
// // This help convert the id from string to ObjectId for the _id.
// const ObjectId = require("mongodb").ObjectId;
 
 
// // This section will help you get a list of all the records.
// recordRoutes.route("/record").get(function (req, res) {
//  let db_connect = dbo.getDb("employees");
//  db_connect
//    .collection("records")
//    .find({})
//    .toArray(function (err, result) {
//      if (err) {
//       window.alert("youfuckedup");
//       throw err;
//      }
//     res.json(result);
//    });
// });
 
// // This section will help you get a single record by id
// recordRoutes.route("/record/:id").get(function (req, res) {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  db_connect
//    .collection("records")
//    .findOne(myquery, function (err, result) {
//      if (err) throw err;
//      res.json(result);
//    });
// });
 
// // This section will help you create a new record.
// recordRoutes.route("/record/add").post(function (req, response) {
//  let db_connect = dbo.getDb();
//  let myobj = {
//    name: req.body.name,
//    position: req.body.position,
//    level: req.body.level,
//  };
//  db_connect.collection("records").insertOne(myobj, function (err, res) {
//    if (err) throw err;
//    response.json(res);
//  });
// });
 
// // This section will help you update a record by id.
// recordRoutes.route("/update/:id").post(function (req, response) {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  let newvalues = {
//    $set: {
//      name: req.body.name,
//      position: req.body.position,
//      level: req.body.level,
//    },
//  };
//  db_connect
//    .collection("records")
//    .updateOne(myquery, newvalues, function (err, res) {
//      if (err) throw err;
//      console.log("1 document updated");
//      response.json(res);
//    });
// });
 
// // This section will help you delete a record
// recordRoutes.route("/:id").delete((req, response) => {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
//    if (err) throw err;
//    console.log("1 document deleted");
//    response.json(obj);
//  });
// });
 
// module.exports = recordRoutes;