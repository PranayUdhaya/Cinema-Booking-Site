/**
 *  Defining the CRUD functions that will be called in routes/users.js 
 */
// importing model
 const User = require("../models/users");

// export createUser function
exports.createUser = async (req, res) => {
    let email = req.body.email;
    let user = await User.findOne({ email });
    if (user) {
        return res.json({ message: "Email already in use", status: 400 });
    }
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
        return res.json(newUser)
    } catch (e) {
        console.log(e);
        return res.json(e)
    }
};

// export login function
exports.login = async (req, res) => {
    let { email, password } = req.body;
    if (!email || !password) {
        return res.json({ message: "Incomplete Request", status: 400 });
    }
    console.log(password)
    let user = await User.findOne({ email });
    if (!user) {
        return res.json({ message: "Email not found", status: 404 });
    }
    user.comparePassword(password, function(matchError, isMatch) {
        if (matchError) {
            return res.json({ message: "Error", status: 404 });
        } else if (!isMatch) {
            return res.json({ message: "Incorrect Password", status: 404 });
        } else {
            return res.json(user);
        }
    });
}

// export updateInfo function
exports.updateInfo = async (req, res) => {
    let email = req.body.email;
    let updatedInfo = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        number: req.body.number,
        promo: req.body.promo
    }
    try {
        let user = await User.findOneAndUpdate(email, updatedInfo);
        return res.json(user);
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
    
}

// export updatePassword function
exports.updatePassword = async (req, res) => {
    let { email, old, change } = req.body;
    let user = await User.findOne({ email });
    User.comparePassword(old, match);
    if (!match) {
        return res.json({ message: "Incorrect Password", status: 404 });
    }
    user.password = change;
    await user.save();
    return res.json(user);
}