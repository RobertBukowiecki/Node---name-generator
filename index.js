const os = require('os');
const fs = require('fs')

genders = ['M', 'F'];

const maleNames = ['Liam', 'Noah', 'Oliver', 'Elijah', 'William', 'James', 'Benjamin', 'Lucas', 'Henry', 'Alexander', 'Mason', 'Michael', 'Ethan', 'Daniel', 'Jacob', 'Logan', 'Jackson', 'Levi', 'Sebastian', 'Mateo']
const famaleNames = ['Olivia', 'Emma', 'Ava', 'Charlotte', 'Sophia', 'Amelia', 'Isabella', 'Mia', 'Evelyn', 'Harper', 'Camila', 'Gianna', 'Abigail', 'Luna', 'Ella', 'Elizabeth', 'Sofia', 'Emily', 'Avery', 'Mila']
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin']

// function randChoice (gender) {
//     let random = Math.floor(Match.random() * (2-1)) + 1;
//     random === 1 ?  = genders[0] : gender = genders[1];
//     return gender
// }

function randChoice(arr) {
    min = 0;
    max = arr.length;
    random = Math.floor(Math.random() * (max-min)) + min;
    return arr[random]
};

const data = [];

for (i = 1; i <= 20; i++) {
    generated = {};
    generated.gender = randChoice(genders);
    generated.name = generated.gender == 'F' ? randChoice(famaleNames) : randChoice(maleNames);
    generated.lastName = randChoice(lastNames);
    generated.age = (Math.floor(Math.random() * (78 - 18)) + 18);
    generated.mail = generated.name + '.' + generated.lastName + '@gmail.com';
    generated.phone = '+48' + (Math.floor(Math.random() * (999999999 - 111111111)) + 111111111);
    data.push(generated);
}
console.log(data)

fs.writeFile('people.json', JSON.stringify(data), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});