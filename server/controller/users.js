/**
 *  Defining the CRUD functions that will be called in routes/users.js 
 */
// importing model
const User = require("../models/users");
const Token = require("../models/token");
const sendEmail = require("../utils/sendEmail");
const { use } = require("../routes/users");

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
            
        //sends an email with the verification url
        await sendEmail(user.email, "Verification Code", `Please enter the verifcation code\n${token.token}`);
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
    try{
        let user = await User.findOne({ email: email });
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
    } catch(e) {
        console.log(e);
        return res.json(e);
    }
};

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
        let user = await User.findOneAndUpdate({email: email}, updatedInfo);
        return res.json(user);
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
};

// export updatePassword function
exports.updatePassword = async (req, res) => {
    let { email, password, updatedPassword } = req.body;
    try {
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
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
};

// exports forgetPassword function
exports.forgetPassword = async (req, res) => {
    let checkEmail = {email: req.body.email};

    try {
        //finds user in database with given email
        let user = await User.findOne(checkEmail);

        //creates 5 digit verification code to reset password and saves it in the database
        const token = await new Token({
            userId: user._id,
            userEmail: user.email,
            token: Math.floor(10000 + Math.random() * 89999)
        }).save()

        //sends user an email with instructions and the password reset verification code
        await sendEmail(user.email, "Reset Password Request", `A request has been made to reset your password. If you did not request a password change, please ignore this email. Otherwise, please enter this verification code on the website to confirm that it is you.\n${token.token}`);

        return res.json();

    } catch (e) {
        console.log(e);
        return res.json({status: 404});
    }
};

exports.verifyForgetPassword = async (req, res) => {
    let checkEmail = {email: req.body.email};
    let code = { token: req.body.token }

    try {
        //finds user in database with given email
        let user = await User.findOne(checkEmail)

        // checks if the verification code matches to one in the database associated to this user
        const tokenDb = await Token.findOne({
            userId: user._id,
            token: code.token
        })

        //if password reset verification code matches, return message to frontend telling it to reroute to change password page.
        if (tokenDb) {
            await Token.deleteOne(tokenDb);
            return res.json();
        } else {
            return res.json({status: 404});
        }

    } catch(e) {
        console.log(e);
        return res.json({status: 404});
    }
}

// exports verifyAccount function
exports.verifyAccount = async (req, res) => {
    let checkEmail = {email: req.body.email};
    let code = { token: req.body.token }

    try {        
        // finds logged in user
        let user = await User.findOne(checkEmail);

        // checks if verification code matches the one in the database associated to this user
        const tokenDb = await Token.findOne({
            userId: user._id,
            token: code.token
        })

        // if verification codes match, set account status to active
        if (tokenDb) {
            user.status = "active";
            await user.save();
            return res.json({message: "Success", status: 500});
            await Token.deleteOne(tokenDb);
        } else {
            return res.json({message: "Failure", status: 500});
        }
    } catch(e) {
        console.log(e);
        return res.json(e);
    }
};

// exports the changePassword function
exports.changeForgetPassword = async (req, res) => {
    // takes email and new password input from frontend
    let checkEmail = {email: req.body.email};
    let newPass = {password: req.body.password};
    
    
    // finds user with given email and updates their password with the new password
    let user = await User.findOneAndUpdate(checkEmail, newPass);
    
    // saves the information in the database
    user.save();
}

// exports the find all users function
exports.findAllUsers = async (req, res) => {
    try {
        let allUsers = await User.find({});
        if (!allUsers) {
            return res.json({ message: "Internal Error", status: 500 });
        }
        return res.json(allUsers);
    } catch(e) {
        console.log(e);
        return res.json(e);
    }
};