// Created an interface that discribes the `student` obj
interface StudentProps {
  firstname: string;
  lastname: string;
  age: number;
  livesInIrving?: boolean;
  previousOccupation?: string;
}
// creating aan object using the StudentProps interface
const student: StudentProps = {
  firstname: "Steven",
  lastname: "Hulse",
  age: 30,
};

// Deconstructing firstname, lastname, and age properties from the `student` obj
const { firstname, lastname, age } = student;

// creating a template literal using the firstname and lastname properties from the `student` obj
const myFullName: string = `${firstname} ${lastname}`;

// logging to the console a new string
console.log(myFullName);

// Using dot notation we added an optional property to the `student` obj
student.livesInIrving = false;

// loggin to the console obj with the added `livesInIrving`
console.log(student);

// Using dot notation we added an optional property to the `student` obj
student.previousOccupation = "student";

// logging out a property from my `student` obj using dot notation
console.log(student.previousOccupation);

//
interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

interface Pet {
  name?: string;
  kind?: string;
}

const car: Vehicle = {
  make: "Audi",
  model: "RS7",
  year: 2024,
};

car.color = "red";

car.isConvertible = false;

console.log(
  `this car is the color :${car.color} and does the top go down ${
    car.isConvertible ? "YES" : "NO"
  } !`,
  car
);

const pet: Pet = {
  name: "Shadow",
  kind: "Cat",
};

delete pet.name;
delete pet.kind;

console.log(pet);
