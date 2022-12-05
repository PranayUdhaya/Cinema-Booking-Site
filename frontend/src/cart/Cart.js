class Cart {
    
    constructor() {
        this.tickets = []
        this.promo = 0
        this.subtotal = ""
        this.total = ""
    }


    addTicket(ticket) {
        this.tickets.push(ticket)
    }

    deleteTicket(index) {
        if (this.tickets[index] != null) {
            delete this.tickets[index]
            return true
        }
    }


    
    getTickets() {
        return this.tickets
    }

    setPromo(amount) {
        this.promo = amount
    }

    calcTotal() {

    }
    
}

export default Cart