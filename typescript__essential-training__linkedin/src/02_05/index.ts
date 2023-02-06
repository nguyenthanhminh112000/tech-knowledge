interface Contact {
  id: number;
  name: ContactName;
  date?: Date;
  status: Status;
}

function clone(source: Contact, callback: (arg1: Contact) => Contact): Contact {
  return { ...source };
}
