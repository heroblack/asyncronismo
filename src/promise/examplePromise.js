// const getCharacters1 = () => {
//   return new Promise((resolve, reject) => {
//     if (true) {
//       setTimeout(() => {
//         resolve("hey OK promise 1");
//       }, 3000);
//     } else {
//       reject(new Error("error 1"));
//     }
//   });
// };

// const getCharacters2 = () => {
//   return new Promise((resolve, reject) => {
//     if (true) {
//       setTimeout(() => {
//         resolve("hey OK promise2");
//       }, 3000);
//     } else {
//       reject(new Error("error 2"));
//     }
//   });
// };

// let listaPromises = [getCharacters1(), getCharacters2()];

// Promise.all(listaPromises)
//   .then(response => console.log(response))
//   .catch(err => console.log(err));

// getCharacters()
//   .then(response => console.log(response))
//   .catch(err => console.log(err));

// console.log("No debo bloquear el Event Loop");
