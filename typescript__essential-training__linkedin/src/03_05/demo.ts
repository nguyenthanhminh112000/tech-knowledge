let recordType: Record<string, string | number> = {
  name: 'Wruce Bayne',
};
recordType.id = 1234;
recordType.name = 'NTM';
// recordType.address = { name: 'q' };//error

////////////////////

type ContactStatus35 = 'active' | 'inactive' | 'new';

interface Address35 {
  street: string;
  province: string;
  postalCode: string;
}

interface Contact35 {
  id: number;
  name: string;
  status: ContactStatus35;
  address: Address35;
}

interface Query {
  sort?: 'asc' | 'desc';
  matches(val): boolean;
}

type ContactQuery35 = Partial<Record<keyof Contact35, Query>>;
type ContactQueryOmit35 = Omit<
  Partial<Record<keyof Contact35, Query>>,
  'status' | 'address'
>;
type ContactQueryPick35 = Pick<
  Partial<Record<keyof Contact35, Query>>,
  'id' | 'name'
>;
type ContactQueryPickRequired = Required<ContactQueryPick35>;
function searchContacts(contacts: Contact35[], query: ContactQuery35) {
  return contacts.filter((contact) => {
    for (const property of Object.keys(contact) as (keyof Contact35)[]) {
      // get the query object for this property
      const propertyQuery = query[property];
      // check to see if it matches
      if (propertyQuery && propertyQuery.matches(contact[property])) {
        return true;
      }
    }

    return false;
  });
}

const filteredContacts = searchContacts(
  [
    /* contacts */
  ],
  {
    id: { matches: (id) => id === 123 },
    name: { matches: (name) => name === 'Carol Weaver' },
    // phoneNumber: { matches: (name) => name === 'Carol Weaver' },
  },
);
