/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

const transactions = [
    {
        itemName: "Laptop",
        category: "Electronics",
        price: 1200,
        timestamp: "2023-12-06T10:30:00Z",
    },
    {
        itemName: "Smartphone",
        category: "Electronics",
        price: 800,
        timestamp: "2023-12-06T11:15:00Z",
    },
    {
        itemName: "Refrigerator",
        category: "Electronics",
        price: 1000,
        timestamp: "2023-12-06T12:00:00Z",
    },

    {
        itemName: "Groceries",
        category: "Food",
        price: 150,
        timestamp: "2023-12-06T12:45:00Z",
    },
    {
        itemName: "Dinner Ingredients",
        category: "Food",
        price: 80,
        timestamp: "2023-12-06T13:30:00Z",
    },
    {
        itemName: "Snacks",
        category: "Food",
        price: 20,
        timestamp: "2023-12-06T14:15:00Z",
    },

    {
        itemName: "Movie Tickets",
        category: "Entertainment",
        price: 25,
        timestamp: "2023-12-06T18:00:00Z",
    },
    {
        itemName: "Concert Tickets",
        category: "Entertainment",
        price: 100,
        timestamp: "2023-12-06T19:30:00Z",
    },
    {
        itemName: "Video Game",
        category: "Entertainment",
        price: 60,
        timestamp: "2023-12-06T20:45:00Z",
    },
    {
        itemName: "Books",
        category: "Education",
        price: 50,
        timestamp: "2023-12-06T19:30:00Z",
    },
];

function calculateTotalSpentByCategory(transactions) {
    const categorisedTransactions = [];

    transactions.forEach((transaction) => {
        const existingCategoryTransaction = categorisedTransactions.find(
            (categorisedTransaction) =>
                categorisedTransaction.category === transaction.category
        );

        if (existingCategoryTransaction) {
            existingCategoryTransaction.totalSpent += transaction.price;
        } else {
            categorisedTransactions.push({
                category: transaction.category,
                totalSpent: transaction.price,
            });
        }
    });

    return categorisedTransactions;
}

console.log(calculateTotalSpentByCategory(transactions));

module.exports = calculateTotalSpentByCategory;
