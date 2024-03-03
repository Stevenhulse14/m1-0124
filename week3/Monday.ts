const countdown = (num: number): number[] => {
  const tempArr: number[] = [];
  for (let i = num; i > 1; i--) {
    tempArr.push(i);
  }
  return tempArr;
};

const sumAll = (num: number[]): number => {
  let sum: number = 0;
  for (let i = 0; i <= num.length - 1; i++) {
    sum = sum + num[i];
  }

  return sum;
};

const getAIndexes = (arr: string[]): number[] => {
  const newArr: number[] = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    newArr.push(i);
  }

  return newArr;
};

const addSuffixToAll = (words: string[], suffix: string): string[] => {
  const newArr: string[] = [];

  for (let i = 0; i <= words.length - 1; i++) {
    const value = words[i];
    newArr.push(value + suffix);
  }
  return newArr;
};

const filterOutNull = (values: any[]): number[] => {
  const newArr: number[] = [];

  for (let i = 0; i <= values.length - 1; i++) {
    if (values[i] !== null) {
      newArr.push(values[i]);
    }
  }

  return newArr;
};

const filterOutStrings = (values: any[]): number[] => {
  const newArr: number[] = [];

  for (let i = 0; i <= values.length - 1; i++) {
    const value = values[i];
    if (typeof value === "number") {
      newArr.push(value);
    }
  }

  return newArr;
};

const includesSeven = (arr: any[]): boolean => {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === 7) {
      return true;
    }
  }

  return false;
};

const findIndex = (arr: number[], value: number): number => {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
};

const oddOrEven = (arr: number[]): string[] => {
  const newArr: string[] = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push("even");
    } else {
      newArr.push("odd");
    }
  }
  return newArr;
};

console.log(oddOrEven([101, 121, 7]));
