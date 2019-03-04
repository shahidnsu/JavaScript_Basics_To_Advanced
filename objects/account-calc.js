let myAccount = {
    name : 'Shahid',
    expenses : 0,
    income : 0
}
let addExpenses = function (account, amount){
    account.expenses = account.expenses + amount ;

}

let addIncome = function (account, amount){
    account.income = account.income + amount
}
let resetAccount = function(account){
    account.income = 0;
    account.expenses = 0;
} 
let getAccountSummary = function (account){
    let balance = account.income - account.expenses;
    return `${account.name} has ${balance}. ${account.income} in income. ${account.expenses} in expenses `

}
addExpenses(myAccount, 100);
addIncome(myAccount, 1000);
console.log(myAccount);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount)
console.log(myAccount);

