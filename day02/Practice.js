// create an array of String and add 10 student names to it
let students = ['James', 'Daniel', 'Shay', 'Ylia', 'Nijat', 'Bel'];

// Display all the students name in the console

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
 // Set the first student name to Ahmed in the students array
 students[0] = 'Ahmed';

 console.log(students);

 // set the last student name to Isabelle in the students array
 students[students.length - 1] = 'Isabelle';

console.log(students);

console.log('------------------------------------------------------------');

// display all the elements of the array in the reverse order

for (let i = students.length - 1; i >= 0; i--) {
    console.log(students[i]);
}

console.log('------------------------------------------------------------');

// create an array of integers with 10 integers in it and the array is in an unsorted order

let numbers = [45, 55, 65, 75, 80, 90, 10, 20, 30, 15];

// write a progrtam that can sort the unsorted numbers array inb ascending order. DO NOT use any built in sort

for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] > numbers[j + 1]) {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}

console.log(numbers);

