// import OpenAI from "openai";
//import OpenAI from "openai";

const balance = document.getElementById("balance");
const moneyPlus = document.getElementById("money-plus");
const moneyMinus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const notification = document.getElementById("notification");
const expenseChart = document.getElementById("expenseChart");
//const openai = new OpenAI();

const dummyTransactions = [
    { id: 1, text: "Transport", amount: -200 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Food", amount: -100 },
    { id: 4, text: "Clothing", amount: -500 },
];

let transactions = dummyTransactions;

function showNotification() {
    notification.classList.add("show");
    setTimeout(() => {
        notification.classList.remove("show");
    }, 2000);
}

function generateID() {
    return Math.floor(Math.random() * 100000000);
}

function addTransaction(e) {
    e.preventDefault();
    if (text.value.trim() === "" || amount.value.trim() === "") {
        showNotification();
    } else {
        const transaction = {
            id: generateID(),
            text: text.value,
            amount: +amount.value,
        };
        transactions.push(transaction);
        addTransactionDOM(transaction);
        updateValues();

        text.value = "";
        amount.value = "";
    }
}

function addTransactionDOM(transaction) {
    const sign = transaction.amount < 0 ? "-" : "+";
    const item = document.createElement("li");
    item.classList.add(sign === "+" ? "plus" : "minus");
    item.innerHTML = `
          ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span
          ><button class="delete-btn" onclick="removeTransaction(${transaction.id
        })"><i class="fa fa-times"></i></button>
    `;
    list.appendChild(item);
}

function updateValues() {
    const amounts = transactions.map((transaction) => transaction.amount);
    const total = amounts
        .reduce((accumulator, value) => (accumulator += value), 0)
        .toFixed(2);
    const income = amounts
        .filter((value) => value > 0)
        .reduce((accumulator, value) => (accumulator += value), 0)
        .toFixed(2);
    const expense = (
        amounts
            .filter((value) => value < 0)
            .reduce((accumulator, value) => (accumulator += value), 0) * -1
    ).toFixed(2);
    balance.innerText = `$${total}`;
    moneyPlus.innerText = `$${income}`;
    moneyMinus.innerText = `$${expense}`;
}

function removeTransaction(id) {
    transactions = transactions.filter((transaction) => transaction.id !== id);
    init();
    updateChart();
}

function init() {
    list.innerHTML = "";
    transactions.forEach(addTransactionDOM);
    updateValues();

}

form.addEventListener("submit", addTransaction);

init();




// async function main() {
//     const completion = await openai.chat.completions.create({
//         messages: [{ role: "system", content: "Analyze the following expenditure data and provide personalized suggestions for making more sustainable and cost-effective financial choices. Focus on how these financial decisions can positively impact the environment and be budget-friendly. Consider areas such as transportation, food, energy consumption, clothing, waste reduction, purchasing decisions, and banking/investments. Ensure that the advice is practical, actionable, and relevant to their current spending habits" }],
//         model: "gpt-3.5-turbo",
//     });

//     console.log(completion.choices[0]);
// }

// main();


