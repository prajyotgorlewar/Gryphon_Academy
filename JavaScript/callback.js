async function run() { // async prefix before a function promotes a function to a promise
    try {
        const user = await getUser()
        const orders = await getOrders(user.id);
        const result = processPayments(orders[0].id);
        console.log
    }
}