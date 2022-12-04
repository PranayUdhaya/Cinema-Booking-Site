class CartProxy {
    
    constructor() {
        var cart = null
    }


    addTicket(ticket) {
        if (cart == null) {
            cart = new Cart()
        } else {
            cart.addTicket(ticket)
        }
    }

    deleteTicket(ticket) {
        if (cart == null) {
            console.log("No cart available")
        } else {
            cart.deleteTicket(ticket)
        }
    }
    
    getTickets() {
        if (cart == null) {
            console.log("No cart available")
        } else {
            return cart.getTickets()
        }
    }


    
}