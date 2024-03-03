function convertMinutesToSeconds(min: number): number {
  const seconds: number = min * 60;

  return seconds;
}

function greet(name: string): string {
  const newStr = `Hey ${name}!`;

  return newStr;
}

const greet2 = (name: string): string => `Hey ${name}!`;

console.log(greet2("Steven"));
