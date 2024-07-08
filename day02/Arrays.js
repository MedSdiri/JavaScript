let elements = ['James', 'Daniel', 1, 2, 3, 4, true, false, 5.5];


console.log(elements);
console.log(elements.length);

console.log('------------------------------------------------------------');

let students = ['Shay', 'Ylia', 'Nijat', 'Belinda'];

console.log(students);
console.log(students[0]);
console.log(students[1]);

students[2] = 'Breanna';

console.log(students);

console.log('------------------------------------------------------------');

let numbers = [45, 55, 65, 75, 80, 90, 100];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log('------------------------------------------------------------');

for (const each of numbers) {
    console.log(each);    
}

console.log('------------------------------------------------------------');

let employees = ['Jon', 'Danaeres', 'Tyrion', 'Tywin'];

console.log(employees);
 employees.push('Isabelle');
 console.log(employees);
 employees.unshift('Daniel');
 console.log(employees);

 employees.unshift('Ahmed');
 employees.unshift('Ahmed');
 employees.unshift('Ahmed');
 employees.unshift('Ahmed');
 console.log(employees);

 employees.splice(1, 3);
 console.log(employees);

 employees.shift();
 employees.shift();
 console.log(employees);

 employees.pop();
 console.log(employees);




