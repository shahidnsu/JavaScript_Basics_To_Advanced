// multiple arguments

let add = function (a,b,c) {
    return a+b +c;
}
let result = add (10,1,5);

console.log(result);

// default arguments 

let scoreTotext = function (name = 'Anonymous', score = 0){

    return "Name: " + name + " - Score: " + score;

}
//default values are used when we provide no arguments to the function
let user = scoreTotext('Shahid');

// if we want to provide the second argument of function but not to the first argument we must provide undefined to first arguments.

let user2 = scoreTotext(undefined, 99);

console.log(user)
console.log(user2);


//tipCalcaulator

let tipPercent = function(bill, tipRatio = .2){

    let totalTip = bill * tipRatio ;
    return totalTip ;

}
let tip = tipPercent(1000, 0.05);
console.log(tip);