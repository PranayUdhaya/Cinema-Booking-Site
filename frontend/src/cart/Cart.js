class Cart {
    
    constructor() {
        this.tickets = []
    }


    addTicket(ticket) {
        this.tickets.push(ticket)
    }

    deleteTicket(ticket) {
        this.tickets.forEach(this.#deleteItem(index, ticket))
    }

    #deleteItem(index, ticket) {
        if (this.tickets[index] == ticket) {
            delete this.tickets[index]
        }
    }

    getTickets() {
        return tickets
    }
    
}