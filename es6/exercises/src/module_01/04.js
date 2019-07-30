const company = {
    name: 'Rocketseat',
    address: {
        city: 'Rio do Sul',
        state: 'SC',
    }
};

const { name, address: { city, state } } = company;

console.log(name);
console.log(city);
console.log(state);

///////////////////////

function showInfo({ name, age }) {
    return `${name} has ${age} years old.`;
}
console.log(showInfo({ name: 'Diego', age: 23 }));

///////////////////////