type ContactName31 = string;
type ContactBirthDate = Date | number | string;

enum ContactStatus {
  Active = 'active',
  Inactive = 'inactive',
  New = 'new',
}
type ContactStatusWithType = 'active' | 'inactive' | 'new';

interface Contact31 {
  id: number;
  name: ContactName31;
  birthDate?: ContactBirthDate;
  status?: ContactStatusWithType;
}

interface Address31 {
  line1: string;
  line2: string;
  province: string;
  region: string;
  postalCode: string;
}

// interface AddressableContact31 extends Contact31, Address31 {}
type AddressableContact31WithType = Contact31 & Address31;
// const smt: AddressableContact31WithType = { id: 1, name: 'a' };

function getBirthDate(contact: Contact31) {
  if (typeof contact.birthDate === 'number') {
    return new Date(contact.birthDate);
  } else if (typeof contact.birthDate === 'string') {
    return Date.parse(contact.birthDate);
  } else {
    return contact.birthDate;
  }
}

const primaryContact: Contact31 = {
  id: 12345,
  name: 'Jamie Johnson',
  status: 'active',
};
