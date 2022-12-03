/**
*  Receiving all the different api requests that can be used to modify the tickets collection
*  Using the controller defind methods from controller/tickets
*/

const express = require("express");
const ticketsController = require("../controller/tickets");
const router = express.Router();
 
// This request will add a new ticket to the tickets collection
router.post("/tickets/add", ticketsController.createTicket);

// This request will delete an existing ticket
router.post("/tickets/delete", ticketsController.deleteTicket);

// This request will find all tickets associated with a user email
router.post("/tickets/find", ticketsController.findTickets);
 
module.exports = router;