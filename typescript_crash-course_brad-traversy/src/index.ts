// ///////////// types
// //number
// let id: number = 5;
// console.log(id);
// //string
// let president: string = 'Nguyen Thanh minh';
// console.log(president);
// //boolean
// let isPresident: boolean = true;
// console.log(isPresident);

// //any
// let anyValue: any = 'Nguyen Thanh Minh';
// console.log('any value', anyValue);
// anyValue = 3;
// console.log('any value', anyValue);
// ///////// array
// //number[]
// let listOfNumber: number[] = [1, 2, 3, 4, 5];
// console.log(listOfNumber);
// //any[]
// let listOfAnything: any[] = [1, true, 'Minh dep trai'];
// console.log(listOfAnything);
// //////// tuple
// let myTuple: [string, number, boolean] = ['Nguyen Thanh Minh', 22, true];
// // array of tuple
// let listOfEmployee: [number, string][];
// listOfEmployee = [
//   [1, 'Nguyen Thanh Minh'],
//   [2, 'Nguyen Thanh Dat'],
// ];

// /////////////// union
// let pid: number | string = '1';
// ///////////////enum
// //enum number
// enum Direction {
//   Up = 2,
//   Down,
//   Left,
//   Right,
// }
// console.log(Direction);
// console.log(Direction['3']);

// enum UserResponse {
//   No = 0,
//   Yes = 1,
// }
// console.log(UserResponse);
// //enum string

// enum ACTION {
//   GET_POST,
//   GET_NAME = 'GET_NAME',
// }
// console.log(ACTION);
// /////////////// Object
// type User = { name: string; age: number };

// const person: User = {
//   name: 'Nguyen Thanh Minh',
//   age: 1,
// };

// /////////////// Type assertion
// let cid: any = 10;
// let copyCID = cid as boolean;
// console.log(copyCID);

// ///////////////Function
// function addNumber(firstNumber: number, secondNumber: number): number {
//   return firstNumber + secondNumber;
// }
// console.log(addNumber(1, 2));
// //function return void
// function logMessage(message: number | string): void {
//   console.log(message);
// }

// function logSomething(message: any) {
//   console.log(message);
// }

// ///////////////Interface

// interface Person {
//   readonly name: string;
//   age: number;
//   sex?: string;
// }

// // let minhThanhNguyen: Person = { name: 'Minh', age: 21 };
// // console.log(minhThanhNguyen);

// ///////////////Interface with function

//////////////////
//ENUM
enum ACTION {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
}
console.log(ACTION);
