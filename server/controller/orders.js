/**
 *  Defining the CRUD functions that will be called in routes/orders.js
 */
// importing model
const Order = require("../models/orders");

// export createOrder function
exports.createOrder = async (req, res) => {

    let newOrder = new Order({
        email: req.body.email,
        showingID: req.body.showingId,
        seats: req.body.seats,
        numOfYouth: req.body.numOfYouth,
        numOfSenior: req.body.numOfSenior, 
        totalPrice: req.body.totalPrice
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
        let orders = await Ticket.find({email: req.body.email});
        return res.json(orders);
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
};