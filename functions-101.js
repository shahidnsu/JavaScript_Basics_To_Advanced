//convert fahrenheitTocelsius

let celsiusValue = function fahrenheitTocelsius(farhenheitValue){

    let value = (farhenheitValue - 32) * 5/9 ;
    return value;

}

let result = celsiusValue(68);
console.log(result);