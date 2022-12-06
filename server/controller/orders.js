/**
 *  Defining the CRUD functions that will be called in routes/orders.js
 */
// importing model
const Order = require("../models/orders");

// export createOrder function
exports.createOrder = async (req, res) => {

    const d = new Date(req.body.date);
    const readable = d.toLocaleString();
    

    let newOrder = new Order({
        email: req.body.email,
        date: req.body.date,
        dateReadable: readable,
        showingID: req.body.showingId,
        seats: req.body.seats,
        numOfYouth: req.body.numOfYouth,
        numOfSenior: req.body.numOfSenior, 
        totalPrice: req.body.totalPrice,
    });    

    try  {
        await newOrder.save();
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
    return res.json(newOrder);
};

// export deleteOrder function
exports.deleteOrder = async (req, res) => {

    try {
        let order = await Order.findByIdAndRemove({ _id: req.body.orderId });
        return res.json(order);
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
};

// export findCards function
exports.findOrders = async (req, res) => {

    try {
        let orders = await Order.find({email: req.body.email});
        return res.json(orders);
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
};


exports.confirmationEmail = async (req, res) => {
    //confirmation number, price, tickets, theater, date/time, movie
    let email = req.body.email;
    //add other variables here

    try {
        //sends email with order details
        //add in order detail information here later
        await sendEmail(email, `Order Confirmation ${"confirmation number"}`, `Order details`);
        return res.json();

    } catch(e) {
        console.log(e);
        return res.status(404).json({message: `Email could not be sent to ${user.email}`})
    }
};