function countDown(number: number): void {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}

function sumall(numbers: number[]): number {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

function printOddNumbers(number: number): void {
  for (let i = 0; i <= number; i += 2) {
    console.log(i);
  }
}

function factorial(number: number): number {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
}

function printMultiplicationTable(number: number): void {
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= number; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
}

function isPrime(number: number): boolean {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function printFibonacci(n: number): void {
  let a = 0,
    b = 1;
  console.log(a);
  console.log(b);
  for (let i = 2; i < n; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}

function calculatePower(base: number, exponent: number): number {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

function reverseArray(arr: any[]): any[] {
  let reversedArray: any = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}

function findMax(numbers: number[]): number {
  let max = numbers[0];
  for (let num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
