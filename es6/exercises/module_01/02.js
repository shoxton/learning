const users = [
    { name: 'Diego', age: 23, company: 'Rocketseat' },
    { name: 'Gabriel', age: 15, company: 'Rocketseat' },
    { name: 'Lucas', age: 30, company: 'Facebook' },
];

const mappedUsers = users.map(item => item.age);
const filteredUsers = users.filter(item => item.age >= 18 && item.company == "Rocketseat");
const foundUsers = users.find(item => item.company == "Google");
const mappedFilteredUsers = users
    .map(item => ({ ...item, age: item.age * 2}) )
    .filter(item => item.age <= 50);

console.log(mappedUsers);
console.log(filteredUsers);
console.log(foundUsers);
console.log(mappedFilteredUsers);