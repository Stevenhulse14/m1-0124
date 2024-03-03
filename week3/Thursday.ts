const getFirstChar = (str: string): string => str[0];
const getLastChar = (str: string): string => str[str.length - 1];
const capitalize = (str: string): string =>
  str[0].toUpperCase() + str.slice(1, str.length).toLowerCase();

// console.log(`First char :`, getFirstChar("LearningFuze"));
// console.log(`Last char :`, getLastChar("LearningFuze"));
// console.log(`Cap :`, capitalize("tO"));

const isUpperCased = (str: string): boolean => str === str.toUpperCase();
// console.log(isUpperCased("HTMl"));
const isLowerCased = (str: string): boolean => str === str.toLowerCase();
// console.log(isLowerCased("html"));
const isVowel = (str: string): boolean => {
  const vowels = ["A", "E", "I", "O", "U"];

  for (let i = 0; i <= vowels.length - 1; i++) {
    if (str.toUpperCase() === vowels[i]) {
      return true;
    }
  }
  return false;
};

console.log(isVowel("a"));

const getWords = (str: string): string[] => str.split(" ");

console.log(getWords("European Computer Manufacturers Association"));
const reverse = (str: string): string => str.split("").reverse().join("");

console.log(reverse("cat"));

const truncate = (length: number, str: string): string =>
  str.slice(0, length) + "...";

console.log(truncate(15, "HTML, CSS, JavaScript, React"));
const numVowels = (str: string): number => {
  let count = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    const char = str[i].toLowerCase();

    switch (char) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        count++;
    }
  }

  return count;
};
console.log(numVowels("All Code All Day"));
// numVowels('All Code All Day');
// const swapChars = () => "";
