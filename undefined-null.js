// undefined for  varivalbes

let name;

if (name === undefined){
    //if no value is assgined to name, name  will assgined to undefined
 console.log('please provide a name');
}
else {
    // if name has a value then this block of code will run
    console.log(name);

}


//undefined for function argumemts
//undefined for function returns default value


let square = function(num){
    console.log(num);
}

let result = square();
console.log(result);

// null as assgined value

let age = 27;
age = null;

console.log(null);
