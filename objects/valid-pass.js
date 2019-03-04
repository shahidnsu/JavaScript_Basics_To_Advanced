let validPassword = function (password){
    let lengthOfPassword = password.length;
    let includes = password.includes('password')
    if(lengthOfPassword < 8 || includes){
        return `your password is weak`;

    }
    else {
        return `your password is strong`;
    }

}

console.log(validPassword('1123passwor'))