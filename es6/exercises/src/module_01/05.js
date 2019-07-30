
const arr = [1, 2, 3, 4, 5, 6];

let [x, ...y] = arr;

console.log(x);
console.log(y);

const sum = (...args) => args.reduce((total,next) => total + next);

console.log(sum(1,5,9,4,6));

///////////////////////

const user = {
    name: 'Diego',
    age: 23,
    address: {
        city: 'Rio do Sul',
        state: 'SC',
        country: 'Brasil',
    }
};

var user2 = { ...user, name: "Gabriel" };
var user3 = { ...user, address: { ...user.address, city: "Lontras" } };

console.log(user);
console.log(user2);
console.log(user3);