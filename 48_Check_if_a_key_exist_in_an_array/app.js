// JavaScript program to check if a key exist in an array .
// program to check if a key exists

const obj1 = {
    id: 1,
    name: 'Rahul',
    age: 16
}

// check if key exists
const isKey = 'id' in obj1;

if(isKey) {
    console.log('The key exists.');
}
else {
    console.log('The key does not exist.');
}