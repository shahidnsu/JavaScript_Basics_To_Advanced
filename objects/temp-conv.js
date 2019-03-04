let tempSummary = function (farhrenheitValue){

    let celsius = (farhrenheitValue - 32) * (5/9) ;
    let kevlvin = (farhrenheitValue + 459.67) * (5/9) ;

    return {
        farhrenheitValue : farhrenheitValue,
        celsiusValue : `Today temp in celsius is ${celsius}C`,
        kevlinValue : `Today  is temp in kelvin is ${kevlvin}`
    }


}

let tempOne = tempSummary(50);
let tempTwo = tempSummary(32);

console.log(tempOne.celsiusValue)
console.log(tempOne.kevlinValue)


