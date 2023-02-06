type ContactName32 = string;
type ContactStatus32 = 'active' | 'inactive' | 'new';
type ContactBirthDate32 = Date | number | string;

interface Contact32 {
  id: number;
  name: ContactName32;
  birthDate?: ContactBirthDate32;
  status?: ContactStatus32;
}

let primaryContact32: Contact32 = {
  id: 12345,
  name: 'Jamie Johnson',
  status: 'active',
};
////////
type ContactField32 = keyof Contact32;
const fieldBirthDate: ContactField32 = 'birthDate';

// const getValueOfAnObject = <T, U extends keyof T>(source: T, propertyName: U) =>
//   source[propertyName];

const getValueOfAnObject = <T, U extends keyof T>(source: T, propertyName: U) =>
  source[propertyName];
