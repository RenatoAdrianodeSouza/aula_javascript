const user = {
    name: `Renato`,
    transactions: [],
    balance: 0
}

function createTransaction(transaction){
    user.transactions.push(transaction)

    if (transaction.type == `credit`) {
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }
}

// createTransaction({type: `credit`, value: 50.5})
// createTransaction({type: `debit`, value: 40.5})

// console.log(`balance: ${user.balance}`)
// console.table(user.transactions)

// createTransaction({ type: 'credit', value: 50 })
// createTransaction({ type: 'credit', value: 140 })
// createTransaction({ type: 'credit', value: 240 })
// createTransaction({ type: 'credit', value: 120 })
// createTransaction({ type: 'debit', value: 80 })
// createTransaction({ type: 'debit', value: 30 })

function getHigherTransactionByType(type) {

    let higherTransaction
    let higherValue = 0

    for (let transaction of user.transactions) {
        if (type == transaction.type && higherValue < transaction.value) {
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }
    return higherTransaction
}

function getAverageTransactionValue(){
    let sum = 0
    for (let transaction of user.transactions) {
        sum += transaction.value
    }
    return sum / user.transactions.length
}

console.log(getAverageTransactionValue())

function getTransactionsCount() {
    let countCredit = 0
    let countDebit = 0

    for (let transaction of user.transactions) {
        if (transaction.type == `credit`) {
            countCredit++
        } else {
            countDebit++
        }
    }

    return {
        credit: countCredit,
        debit: countDebit
    }
}


createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance) // 60

console.log(getHigherTransactionByType('credit'))  // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType('debit')) // { type: 'debit', value: 80 }
console.log(getAverageTransactionValue()) // 70
console.log(getTransactionsCount()) // { credit: 2, debit: 2 }