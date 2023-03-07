// Write your solution in this file!
// js

const employee = {
    name : "John",
    streetAddress : "939 Rodney Street"
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    // returns an employee with the original key value pairs
    // and the new key value pair
    // it does not modify the original employee, but rather
    // returns a clone with the new data
    return {...obj, [key]: value };
}



