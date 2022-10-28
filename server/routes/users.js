const express = require('express');
const router = express.Router();
const path = require('path');
const dbo = require("../db/conn");
const Token = require("../api/token");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const { db } = require('../api/token');
const token = require('../api/token');

// this will get all users
router.route("/users/session").get(function (req, res) {
    let db_connect = dbo.getDb("CinemaDB");
    let checkEmail = { email: req.body.email };
    db_connect.collection("Users").findOne(checkEmail, function (err, result) {
        if (err) {
            window.alert(err);
            throw err;
        }
        res.json(result);
    });
});

// This section will help you get a user by their email
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
            res.json(result);
            /*if (pass.password == result.password) {
                res.json(result);
            } else {
                //res.send("UserNotFound");
                console.log("Username or Password is incorrect. Please try again.");
                throw err;
                //window.alert("Username or Password is incorrect. Please try again.");
                //return;
            }*/
        }
    });
});

// This section will help you create a new user
router.route("/users/add").post(async function (req, response) {
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
    existingAccount = false;
    let user = await db_connect.collection("Users").findOne(checkEmail)
    if (user) {
        //if email is in database, sends the following error message
        console.log("User with given email already exists");
        existingAccount = true;
        return;
    } else {
         //creates the new account into the database if the email is not taken.
         db_connect.collection("Users").insertOne(myobj);
         existingAccount = false;
    }

    if (existingAccount == false) {
        try {
            user = await db_connect.collection("Users").findOne(checkEmail);
            
            //creates a token for a verification link
            const token = await new Token({
                userId: user._id,
                userEmail: user.email,
                token: Math.floor(1000 + Math.random() * 8999)
            }).save()
            //creates a url using the user id and token string
            const url = `${process.env.BASE_URL}createconfirmation`;
            
            //sends an email with the verification url
            await sendEmail(user.email, "Verification Code", `Please enter the verifcation code\n${token.token}\nat the following link:\n${url}`);
            
            console.log("A verification email has been sent to your account");
        } catch (error) {
            console.log(error);
            console.log("Internal Server Error");
        }
    }

});

router.route("/token").post(async function (req, res) {
    let db_connect = dbo.getDb("CinemaDB");
    let checkEmail = {email: req.body.email};
    let code = { token: req.body.token}
    user = await db_connect.collection("Users").findOne(checkEmail);
    const tokenDb = await Token.findOne({
        userId: user._id
    })

    /*if (tokenDb) {
        let statusUpdate = {status: "active"};
        db_connect.collection("Users").updateOne(checkEmail, {$set: statusUpdate});
        console.log ("Account has been successfully verified");
    } else {
        console.log("Account could not be verified");
    }*/

    let statusUpdate = {status: "active"}

    console.log(code.token);
    console.log(tokenDb.token);
    if (code.token == `${tokenDb.token}`) {
        db_connect.collection("Users").updateOne(checkEmail, {$set: statusUpdate})
        console.log ("Account has been successfully verified");
    } else {
        console.log("Account could not be verified");
    }
});

//verifies account using verification link
router.get("users/:_id/verify/:token", async (req, res) => {
    try {
        const user = await db_connect.collection("Users").findOne({_id: params._id});

        if (!user) {
            console.log("Invalid Link");
            return;
        }

        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token
        });

        if(!token) {
            console.log("Invalid Link");
            return;
        }

        updatedStatus = "active";
        await db_connect.collection("Users").updateOne({email: user.email}, {$set: updatedStatus});
        await token.remove()

        console.log("Email verified successfuly");

    } catch (error) {
        console.log("Internal Server Error");
    }
})


// This section will change password
router.route("/users/updatepass").post(function (req, response) {
    let db_connect = dbo.getDb("CinemaDB");
    let checkEmail = { email: req.body.email};
    let oldPass = { password: req.body.password};
    let newPass = { password: req.body.updatedPassword };

    db_connect.collection("Users").findOne(checkEmail, function (err, result) {
        if (err) throw err;
        else {
            if (oldPass.password == result.password) {
                db_connect.collection("Users").updateOne(checkEmail, { $set: newPass }, function (error, res) {
                    if (error) throw error;
                });
            } else {
                console.log("Incorrect password");
            }
        }
        response.json(result);
    });
});

// This section will change personal info
router.route("/users/updateinfo").post(function (req, response) {
    let db_connect = dbo.getDb("CinemaDB");
    let userEmail = { email: req.body.email };
    let updatedUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        number: req.body.number
    };
    db_connect.collection("Users").updateOne(userEmail, { $set: updatedUser }, function (err, result) {
        if (err) throw err;
        response.json(result);
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