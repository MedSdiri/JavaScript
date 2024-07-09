function greeting(){
    console.log('Hello Promgrammes');
    console.log('Hello School');
    console.log('Hello World');
    
}

greeting();
greeting();

console.log('Test Completed successfully');

console.log('------------------------------------------------------------');

function displayValue(value = 'Unknown value !!'){
    console.log(`The value is ${value}`);
}

displayValue(101);
displayValue('JavaScript');
displayValue();

console.log('------------------------------------------------------------');


function square(number){
    result = number * number;
    return result;
}

let num = square(10);

console.log(num);
