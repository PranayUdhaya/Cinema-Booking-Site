class Cart {
    
    constructor() {
        var tickets = []
    }


    addTicket(ticket) {
        tickets.push(ticket)
    }

    deleteTicket(ticket) {
        tickets.forEach(this.#deleteItem(index, ticket))
    }

    #deleteItem(index, ticket) {
        if (tickets[index] == ticket) {
            delete tickets[index]
        }
    }

    getTickets() {
        return tickets
    }
    
}