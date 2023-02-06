// type Style = 'bold' | 'italic';
// let style: Style;
// style = 'bold';
// // // // // Type

// // // // // Interface
interface Person {
  firstName: string;
  lastName: string;
  [walk: string]: any;
}

const firstPerson: Person = {
  firstName: 'Minh',
  lastName: 'Nguyen',
  walk: () => {},
};
const secondPerson: Person = {
  firstName: 'Minh',
  lastName: 'Hung',
};
// // // // // // //functions
function addTwoNumber(fNumber: number, sNumber: number): string {
  return (fNumber + sNumber).toString();
}
/////////////////// Array
const arr: number[] = [];
arr.push(1);
// arr.push(true);
arr.push(3);
//////////////// tuple
type MyTuple = [string, number, boolean];
const myFirstTuple: MyTuple = ['Minh', 22, true];
