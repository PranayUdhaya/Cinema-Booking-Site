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
            cart = new Cart()
        } else {
            cart.addTicket(ticket)
        }
    }


    
}