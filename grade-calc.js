// student score , total possiable score

// 15/20 -> you got a C (75%)!

// A 90-100, B 80-89 C 70-79 D 60-69 F 0-59

let obtainGrade = function (student_score, total_score){
    let student_grade = (student_score / total_score) * 100;
    
    if (student_grade >= 90){
        return (`You got a A (${student_grade}%)`)
    }
    else if (student_grade >=80 && student_grade <= 89){
        return (`You got a B (${student_grade}%)`)
    }
    else if (student_grade >= 70 && student_grade <= 79){
        return (`You got a C (${student_grade}%)`)
    }
    else if (student_grade >= 60 && student_grade <= 69){
    
        return (`You got a D (${student_grade}%)`)
    }
    else if (student_grade >=0 && student_grade <= 59 ){
          
        return (`You got a F (${student_grade}%)`)
    }
    
}




let myGrade = obtainGrade(49, 100);
console.log(myGrade);