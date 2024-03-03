interface Person {
  firstName: string;
  lastName: string;
}

const getValue = (
  obj: { firstName: string; lastName: string },
  key: keyof Person
): Person[keyof Person] => obj[key];

console.log(
  "getValue :",
  getValue({ firstName: "David", lastName: "Thomas" }, "firstName")
);

function setValue(
  object: Record<string, unknown>,
  key: string,
  value: unknown
): void {
  object[key] = value;
  console.log((object[key] = value));
}

console.log("setValue", setValue({ firstName: "David" }, "lastName", "Thomas"));

const getValues = (obj: Record<string, unknown>): unknown[] => {
  const newArr: unknown[] = [];

  for (const key in obj) {
    newArr.push(obj[key]);
  }

  return newArr;
};

//console.log()

const getKeys = (obj: Record<string, unknown>): string[] => {
  const newArr: string[] = [];

  for (const key in obj) {
    newArr.push(key);
  }

  return newArr;
};
// transform into more a less verbose function.
const toObject = ([key, value]: [string, unknown]): Record<
  string,
  unknown
> => ({ [key]: value });

console.log("ToObject :", toObject(["firstName", "David"]));

const pick = (
  source: Record<string, unknown>,
  keys: string[]
): Record<string, unknown> => {
  const newObj: Record<string, unknown> = {};
  for (let i = 0; i <= keys.length - 1; i++) {
    const curr = keys[i];
    if (source[curr]) {
      newObj[curr] = source[curr];
    }
  }
  return newObj;
};
console.log("Pick:", pick({ foo: 1, bar: 2, baz: 3 }, ["foo", "baz"]));

const target = { foo: 4 };
const source = {
  foo: 1,
  bar: 2,
  baz: 3,
};

const defaults = (
  target: Record<string, unknown>,
  source: Record<string, unknown>
): void => {
  for (const key in source) {
    if (typeof target[key] === "undefined") {
      target[key] = source[key];
    }
  }
};

console.log(defaults(target, source), target);
