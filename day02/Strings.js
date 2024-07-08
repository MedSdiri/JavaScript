let schoolName = 'Home School';

console.log(schoolName.length);
console.log(schoolName.length -1);

console.log(schoolName[0]);
console.log(schoolName[10]);

console.log('------------------------------------------');


schoolName = schoolName.toLocaleLowerCase(); // 'home school'
console.log(schoolName);

schoolName = schoolName.toUpperCase(); // 'HOME SCHOOL'
console.log(schoolName);

console.log('----------------------------------------------');

let expectedText = 'JavaScript';

let actualText = 'javascript';


console.log(expectedText.toLowerCase() === actualText.toLowerCase()); 

let s = 'Python Python';

s= s.replace('Python', 'JavaScript');

console.log(s);

s = s.replace(/Python/g, 'JavaScript'); // global flag

console.log(s);

console.log('-----------------------------------------');

let str = 'ABSHDDLJFSDHJFSKJHFKJSHFKJHSKJHFKSJHFKJH';

str = str.replace(/\d/g, '');

console.log(str);

console.log('------------------------------------------');

let w = 'JavaScript';

for (let i = 0; i < w.length; i++) {
    console.log(w[i]);
    
}

console.log('------------------------------------------------------------');

let email = 'ahmedhomeschool@yahoo.com';

let domain= email.substring(email.indexOf('@') + 1, email.lastIndexOf('.'));

console.log(domain);

console.log('------------------------------------------------------------');

let employeeName = 'Sammy';
let employeeAge = 35;

console.log('Employee name is: ' + employeeName);
console.log('EMployee age is: ' + employeeAge);

console.log(`My name is ${employeeName} and my age is ${employeeAge} years old`);



