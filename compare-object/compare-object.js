// const minh = {
//   name: 'Minh',

//   dob: 2000,
//   age: 21,

//   angry: true
// };
// console.log(minh);
// console.log(Object.keys(minh));

// class Person {
//   constructor(name, dob) {
//     this._name = name;
//     this._dob = dob;
//   }
//   calcAge() {
//     return 2022 - this._dob;
//   }
// }
// const minh = new Person('Minh', 2000);
// console.log(minh);
// console.log(Object.keys(minh));

//////////////////////// Shallow equality
// const minh = {
//   name: 'Minh',
//   age: 21
// };
// const minhCopy = {
//   name: 'Minh',
//   age: 21
// };
// console.log(minh === minhCopy);

// function compareShallowContent(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   for (const key of keys1) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(compareShallowContent(minh, minhCopy));
////////////////////////

const promise = new Promise((res, rej) => {
  res('dcmm');
})
  .then((data) => {
    console.log('resolve case');
    console.log(data);
  })
  .catch((err) => {
    console.log('reject case');
    console.log(err);
  });

// // promise
