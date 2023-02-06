type PersonName = string;
type PersonAge = number;
interface Person4C {
  name: PersonName;
  age: PersonAge;
}

type Query4C<T> = (arg: T) => boolean;

type QueryPerson = {
  [Property in keyof Person4C]: Query4C<Person4C[Property]>;
};

// type TypeSomeThing = keyof Person4C[];

function queryPerson(
  items: Person4C[],
  query: QueryPerson, // <--- replace this!
) {
  return items.filter((item) => {
    // iterate through each of the item's properties
    for (const property of Object.keys(item) as (keyof Person4C)[]) {
      // get the query for this property name
      const propertyQuery = query[property] as Query4C<string | number>;
      // Query4C<string>|Query4C<number>
      // see if this property value matches the query
      if (propertyQuery && propertyQuery(item[property])) {
        return true;
      }
    }

    // nothing matched so return false
    return false;
  });
}

const matches = queryPerson(
  [
    { name: 'Ted', age: 12 },
    { name: 'Angie', age: 31 },
  ],
  {
    name: (name) => name === 'Angie',
    age: (age) => age > 30,
  },
);
