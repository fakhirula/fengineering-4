// const req = {
//     body: {
//         name: "Rul",
//         age: 15,
//     },
// };

// // Destruc object
// const { name, age, height = 160 } = req.body;
// // console.log(name, age, height);

// // Destruc array
// const family = ["Michael", "Hannah", "Jonas"];
// const [suami, istri, anak] = family;

// // console.log(suami, istri, anak);


// // Rest
// function sum(...numbers) {
//     let hasil = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         hasil = hasil + numbers[i];
//     }

//     // console.log(hasil);
// }

// sum(1, 2, 3, 4, 5);



// // Spread array
// const family = ["Michael", "Hannah"];
// const newFamily = [...family, "Jonas"];

// // Spread object
// const user = {
//     name: "Rul",
//     age: 15,
// };

// const newUser = {
//     ...user,
//     major: "Informatics",
// };

// console.log(newUser);


// const names = ["Michael", "Hannah", "Jonas"];

// // forEach untuk looping data
// names.forEach(function (name) {
//     console.log(name);
// });

// // map untuk format data
// const formatedName = names.map(function (name) {
//     console.log(`Mr/Mrs ${name}`);
// });

// import { index, store } from "./controller.js";

// function main() {
//     index();
//     store();
// }

// main();


function download() {
    
    setTimeout(function () {
        console.log("Downloading...");
    }, 3000);
}

function verify() {
    setTimeout(function () {
        console.log('Verify...');
    }, 3000);
}

function show() {
    console.log("Download complete");
}

function main() {
    download();
    verify();
    show();
}

main();