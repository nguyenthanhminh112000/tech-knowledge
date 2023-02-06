type ContactName = string;

enum Status {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  NEW = 'NEW',
}
console.log(Status);

interface Contact {
  id: number;
  name: ContactName;
  date?: Date;
  status: Status;
}

const vuNguyen: Contact = {
  id: 1,
  name: 'Nguyen Quoc Vu',
  date: new Date('01-01-2000'),
  status: Status.ACTIVE,
};
