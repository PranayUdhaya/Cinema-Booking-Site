/**
 *  Defining the CRUD functions that will be called in routes/users.js 
 */
// importing model
 const User = require("../models/users");
 const Token = require("../models/token");
 const sendEmail = require("../utils/sendEmail");

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
        admin: false,
    })
    try {
        await newUser.save();

        //code block to send a verification email
        let user = await User.findOne({ email });
        const token = await new Token({
            userId: user._id,
            userEmail: user.email,
            token: Math.floor(1000 + Math.random() * 8999)
        }).save()
        //creates a url using the user id and token string
        const url = "localhost:3000/createconfirmation";
            
        //sends an email with the verification url
        await sendEmail(user.email, "Verification Code", `Please enter the verifcation code\n${token.token}\nat the following link:\n${url}`);
        return res.json({message: "A verification email has been sent to your account"});

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
    user.comparePassword(password, async function(matchError, isMatch) {
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
    let { email, password, updatedPassword } = req.body;
    let user = await User.findOne({ email });
    user.comparePassword(password, async function(matchError, isMatch) {
        if (matchError) {
            return res.json({ message: "Error", status: 404 });
        } else if (!isMatch) {
            return res.json({ message: "Incorrect Password", status: 404 });
        } else if (isMatch) {
            user.password = updatedPassword;
            await user.save();
            return res.json(user);
        }
    });
}

// exports verifyAccount function
exports.verifyAccount = async (req, res) => {
    let checkEmail = {email: req.body.email};
    let code = { token: req.body.token }
    console.log(checkEmail)

    // finds logged in user
    let user = await User.findOne(checkEmail);
    console.log(user.email)
    console.log(user._id)
    // checks if verification code matches the one in the database
    const tokenDb = await Token.findOne({
        userId: user._id,
        token: code.token
    })

    console.log(tokenDb)   // if verification codes match, set account status to active
    if (tokenDb) {
        let statusUpdate = {status: "active"};
        User.updateOne(checkEmail, {$set: statusUpdate});
        console.log("Account has been successfully verified");
        await Token.deleteOne(tokenDb);
    } else {
        console.log("Account could not be verified");
    }
}