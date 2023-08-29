//  JavaScript program to merge properties in an object .
let obj1 = {
    name: 'Rahul'
}

let obj2 = {
    age: 16
}

let obj3 = {
    address: 'Bhagirathpur'
}

var mergrObj = {
    ...obj1,
    ...obj2,
    ...obj3
}

console.log(mergrObj);