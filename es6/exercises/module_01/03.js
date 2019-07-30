// 3.1
const arr = [1, 2, 3, 4, 5];

// arr.map(function(item) {
//  return item + 10;
// });
/////////////
arr.map((item) => item + 10);


// 3.2
const user = { name: 'Diego', age: 23 };

// function showAge(user) {
//  return user.age;
// }
////////////
const showAge = (user) => user.age;

showAge(user);


// 3.3
const name = "Diego";
const age = 23;

// function showUser(name = 'Diego', age = 18) {
//  return { name, age };
// }
///////////
const showUser = (name="Diego",age=18) => ({name,age});

showUser(name, age);
showUser(name);


// 3.4
// const promise = function() {
//  return new Promise(function(resolve, reject) {
//  return resolve();
//  })
// } 
///////////
const promise = () => new Promise((resolve,reject) => resolve());