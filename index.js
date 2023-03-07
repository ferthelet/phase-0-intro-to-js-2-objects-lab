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
    return {...obj, [key]: value }; // spread
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    // updates `employee` with the given `key` and `value` (it is destructive)
    // and returns the entire updated employee
    obj[key] = value; // bracket 
    return obj;
}

function deleteFromEmployeeByKey(employee, key) {
    // deletes `key` from a clone of employee and returns the new employee (it 
    // is non-destructive
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

