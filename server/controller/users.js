/**
 *  Defining the CRUD functions that will be called in routes/users.js 
 */
// importing model
 const User = require("../models/users");

// export creatUser function
 exports.createUser = async (req, res) => {
    let newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        number: req.body.number,
        status: req.body.status,
        rememberMe: req.body.rememberMe,
        promo: req.body.promo,
    })
    try {
        await newUser.save();
        console.log("OK");
        return res.json(newUser)
    } catch (e) {
        console.log(e);
        return res.json(e)
    }
};