// Array Manipulation

// Head

const Head = (arr: any[]): any => arr[0];
console.log("head :", Head([]));
// last

const Last = (arr: any[]): any => arr[arr.length - 1];
console.log("Last :", Last(["foo", "bar", "baz"]));
// Tail

const tail = (arr: any[]): any[] => {
  const newArr: any[] = [];

  for (let i = 1; i <= arr.length - 1; i++) {
    newArr.push(arr[i]);
  }

  return newArr;
};

console.log("tail :", tail(["foo", "bar", "baz"]));
// Inital
const Initial = (arr: any[]): any[] => {
  const newArr: any[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i]);
  }

  return newArr;
};
console.log("inital :", Initial(["foo", "bar", "baz"]));
// Reverse

const Reverse = (arr: any[]): any[] => {
  const newArr: any[] = [];
  const startingPoint = arr.length - 1;

  for (let i = startingPoint; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  return newArr;
};
console.log("Reverse :", Reverse(["foo", "bar", "baz"]));

// Compact

/*
function 

    for loop  loop to the end of the arr
    if(arr[i]) if it is null, NaN, 0, ... <-- fasely 
    {
        newArr.push(arr[i])
    }
*/

// Take

const Take = (arr: any[], count: number): any => {
  const newArr: any[] = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    if (i === count) {
      break;
    }
    newArr.push(arr[i]);
  }

  return newArr;
};
console.log("Take: ", Take(["foo", "bar", "baz", "qux"], 2));
// TakeRight
function takeRight(arr: any[], count: number): any[] {
  const newArr: any[] = [];

  for (let i = arr.length - count; i < arr.length; i++) {
    const element = arr[i];
    newArr.push(element);
  }

  return newArr;
}
console.log("takeRight: ", takeRight(["foo", "bar", "baz", "qux"], 2));
// Chunk

function Chunk(arr: unknown[], size: number): unknown[] {
  const newArr: unknown[][] = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    if (i % size === 0) {
      newArr.push([arr[i]]);
    } else {
      const lastChunk = newArr[newArr.length - 1];
      lastChunk.push(arr[i]);
    }
  }

  return newArr;
}
console.log("Chunk: ", Chunk(["foo", "bar", "baz", "qux"], 2));
// String Manipulation
