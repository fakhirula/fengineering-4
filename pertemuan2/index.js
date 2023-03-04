const name = 'Fakhirul Akmal';
const age = 21;
const isMarried = false;

const greeting = `
    Hai nama saya: ${name}

    Umur saya: ${age}
`;

console.log(greeting);

const nilai = 95;

if (nilai > 90) {
  console.log('A');
} else if (nilai > 80) {
  console.log('B');
} else if (nilai > 70) {
  console.log('C');
} else {
  console.log('D');
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// declaration
function calcAge(yearBorn) {
  const yearNow = 2023;
  const age = yearNow - yearBorn;
  return age;
}

// expression: arrow
const calcAgeMhs = (yearBorn) => {
  const yearNow = 2023;
  const age = yearNow - yearBorn;
  return age;
};

console.log(calcAge(1999));

const animals = ['kucing', 'ikan', 'burung'];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

const user = {
  nama: 'Rul',
  umur: 21,
  tinggi: 155,
};

// console.log(user.nama, user['umur']);

for (let label in user) {
  console.log(user[label]);
}
