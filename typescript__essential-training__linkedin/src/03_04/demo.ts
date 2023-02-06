type ContactStatus34 = 'active' | 'inactive' | 'new';

interface Address34 {
  street: string;
  province: string;
  postalCode: string;
}

interface Contact34 {
  id: number;
  name: string;
  status: ContactStatus34;
  address: Address34;
}

type SmtDong = Contact34['address'];

interface ContactEvent34 {
  contactId: Contact34['id'];
}

interface ContactDeletedEvent34 extends ContactEvent34 {}

interface ContactStatusChangedEvent34 extends ContactEvent34 {
  oldStatus: Contact34['status'];
  newStatus: Contact34['status'];
}

interface ContactEvents34 {
  deleted: ContactDeletedEvent34;
  statusChanged: ContactStatusChangedEvent34;
  // ... and so on
}

function getValue<T, U extends keyof T>(source: T, propertyName: U) {
  return source[propertyName];
}

const handleEvent = <T extends keyof ContactEvents34>(
  eventName: T,
  handler: (evt: ContactEvents34[T]) => void,
) => {
  if (eventName === 'statusChanged') {
    return handler({
      contactId: 1,
      oldStatus: 'active',
      newStatus: 'inactive',
    });
  }
  if (eventName === 'deleted') {
    // return handler({ contactId: 1 });
  }
};

handleEvent('statusChanged', (evt) => {
  return evt;
});
