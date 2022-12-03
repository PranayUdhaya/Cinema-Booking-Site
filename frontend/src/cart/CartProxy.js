class Cart {
    constructor() {
        var tickets = []
    }


    async function addTicket(ticket) {
        tickets.push(ticket)
    }

    async function deleteTicket(ticket) {
        tickets.forEach(deleteItem(index, ticket))
    }

    async function deleteItem(index, ticket) {
        if (tickets[index] == ticket) {
            delete tickets[index]
        }
    }

    
}