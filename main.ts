#! /usr/bin/env node
import inquirer from "inquirer"

const Currency: any = {
    USD:1,
    INR:74.57,
    EUR: 0.91,
    GBP:0.76,
    PKR:280
};

let user_answer = await inquirer.prompt ([{
    name: "from",
    message: "Enter from Currency",
    type: "list",
    choices:["USD","INR","EUR","GBP","PKR"]
},
{
    name: "to",
    message: "Enter from Currency",
    type: "list",
    choices:["USD","INR","EUR","GBP","PKR"]
},

 {
    name: "amount",
    message: "Enter from Currency",
    type: "number",
},
]

)
let fromAmount = Currency[user_answer.from]
let toAmount= Currency[user_answer.to]
let Amount= user_answer.amount 
let baseAmount = Amount / fromAmount
let convertedAmount = baseAmount*toAmount
console.log(convertedAmount);

console.log(fromAmount);
console.log(toAmount);
console.log('amount');
    



