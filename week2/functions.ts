function getSumOfSquares(x: number, y: number): number {
  const sum = Math.pow(x, 2) + Math.pow(y, 2);
  return sum;
}

//console.log(getSumOfSquares(2, 5));

interface Person {
  id: number;
  firstName: string;
  lastName: string;
}
const lea: Person = {
  id: 1,
  firstName: "Lea",
  lastName: "Verou",
};
function getFirstInitialOfPerson(person: Person): string {
  const firstInitial = person.firstName[0];
  return firstInitial;
}

const getInitialsOfPerson = (person: Person): string =>
  person.firstName[0] + person.lastName[0];

console.log(getInitialsOfPerson(lea));

interface User {
  name: string;
  occupation: string;
  birthPlace: string;
}
var lea2: User = {
  name: "Lea Verou",
  occupation: "software developer",
  birthPlace: "Lesbos, Greece",
};

const getPropertyValue = (object: User, key: string): any => {
  const value: any = object[key];

  return value;
};

console.log(getPropertyValue(lea2, "occupation"));
