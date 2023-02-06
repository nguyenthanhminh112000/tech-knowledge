interface Contact6 {
  id: number;
  name: string;
}
interface Contact7 {
  id: number;
  name: string;
  age: number;
}
interface Contact9<T> {
  id: number;
  name: string;
  age: number;
  externalID: T;
}
interface Contact8<TExternalID> {
  id: number;
  name: string;
  age: number;
  externalID: TExternalID;
  detailedContact: Contact9<TExternalID>;
}

function cloneDouble<T1, T2 extends T1>(source: T1): T2 {
  return { ...source } as unknown as T2;
}

const vu: Contact6 = {
  id: 1,
  name: 'NQV',
};

const cloneVu = cloneDouble<Contact6, Contact7>(vu);
