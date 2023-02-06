type ContactStatus42 = 'active' | 'inactive' | 'new';

interface Address42 {
  street: string;
  province: string;
  postalCode: string;
}

interface Contact42 {
  id: number;
  name: string;
  status: ContactStatus42;
  address: Address42;
  email: string;
}

interface Query42<T> {
  sort?: 'asc' | 'desc';
  matches(val: T): boolean;
}

// type ContactQuery42 = Partial<Record<keyof Contact42, Query42>>;

type ContactQueryWithMappedType42 = {
  [Property in keyof Contact42]?: Query42<Contact42[Property]>;
};

function searchContacts42(
  contacts: Contact42[],
  query: ContactQueryWithMappedType42,
) {
  return contacts.filter((contact) => {
    for (const property of Object.keys(contact) as (keyof Contact42)[]) {
      // get the query object for this property
      const propertyQuery = query[property] as Query42<
        Contact42[keyof Contact42]
      >;
      // check to see if it matches
      if (propertyQuery && propertyQuery.matches(contact[property])) {
        return true;
      }
    }

    return false;
  });
}

const filteredContacts42 = searchContacts42(
  [
    /* contacts */
  ],
  {
    // id: { matches: (id) => id === 123 },
    name: { matches: (name) => name === 'Carol Weaver' },
    id: { matches: (a) => a === 123 },
    status: {
      matches: (a) => a === a,
    },
  },
);
