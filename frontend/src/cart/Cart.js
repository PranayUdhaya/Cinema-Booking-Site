class Cart {
    
    constructor(id) {
        this.tickets = []
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
    
}

export default Cart