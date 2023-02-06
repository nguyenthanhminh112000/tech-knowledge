const x = 'string';
const y = true;
console.log(typeof x); // --> "string"
console.log(typeof y); // --> "boolean"

type ContactName33 = string;
type ContactStatus33 = 'active' | 'inactive' | 'new';
type ContactBirthDate33 = Date | number | string;

interface Contact33 {
  id: number;
  name: ContactName33;
  birthDate?: ContactBirthDate33;
  status?: ContactStatus33;
}

function toContact(nameOrContact: string | Contact33) {
  if (typeof nameOrContact === 'object') {
    return {
      id: nameOrContact.id,
      name: nameOrContact.name,
      status: nameOrContact.status,
    };
  }
  return {
    id: 0,
    name: nameOrContact,
    status: 'active',
  };
}

const minMaxStuff = { min: 0, max: 500 };

const doSmt = (source: typeof minMaxStuff): typeof minMaxStuff => {
  return { min: 10, max: 30 };
};
