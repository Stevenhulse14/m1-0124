### TypeScript Data Model:

1. **Primitives:**

   - TypeScript allows explicit declaration of variable types using primitives.
     ```typescript
     let age: number = 25;
     let name: string = "John";
     let isStudent: boolean = true;
     ```
   - **Type Inference:** TypeScript can also infer types based on the assigned values, making code concise and readable.

2. **Arrays:**

   - Arrays can be initialized with a specific type, ensuring consistency.
     ```typescript
     let numbers: number[] = [1, 2, 3, 4];
     let names: string[] = ["Alice", "Bob", "Charlie"];
     ```
   - **Array Methods:** TypeScript provides methods like `map`, `filter`, and `reduce` for efficient array operations.

3. **Tuples:**

   - Tuples provide a way to express an array where the type of a fixed number of elements is known.
     ```typescript
     let person: [string, number] = ["John", 25];
     ```
   - **Accessing Elements:** Access elements using index positions, maintaining type integrity.

4. **Enums:**

   - Enums define a set of named constants representing numeric values.

     ```typescript
     enum Color {
       Red,
       Green,
       Blue,
     }

     let favoriteColor: Color = Color.Blue;
     ```

   - **Enum Values:** Enums can be used to improve code readability by assigning meaningful names to numeric values.

5. **Any and Unknown:**
   - `any` allows dynamic typing, but it lacks type safety.
     ```typescript
     let flexibleValue: any = 42;
     ```
   - `unknown` is a safer alternative as it requires explicit type-checking before usage.
     ```typescript
     let unknownValue: unknown = "Hello";
     ```

### TypeScript Arrays:

1. **Basic Array Operations:**

   - TypeScript arrays support common operations like `push`, `pop`, and others.
     ```typescript
     let numbers: number[] = [1, 2, 3, 4];
     numbers.push(5);
     numbers.pop();
     ```
   - **Type Safety:** Array methods maintain type safety, preventing unintended operations.

2. **Array Destructuring:**

   - Destructuring simplifies array element extraction into variables.
     ```typescript
     let [first, second] = numbers;
     console.log(first); // Output: 1
     ```
   - **Swapping Values:** Easily swap values between variables without a temporary variable.

3. **Array Iteration:**

   - Utilize `forEach`, `map`, and other methods for concise and expressive array operations.
     ```typescript
     numbers.forEach((num) => console.log(num));
     let doubled = numbers.map((num) => num * 2);
     ```
   - **Immutability:** Functions like `map` create new arrays, maintaining immutability.

4. **Filtering and Reducing:**
   - Leverage `filter` and `reduce` for more advanced array manipulations.
     ```typescript
     let evenNumbers = numbers.filter((num) => num % 2 === 0);
     let sum = numbers.reduce((acc, curr) => acc + curr, 0);
     ```
   - **Predicate Functions:** Use custom functions for complex filtering conditions.

### TypeScript Objects:

1. **Object Properties:**

   - Objects in TypeScript can have explicit properties with assigned types.
     ```typescript
     let person: { name: string; age: number } = { name: "John", age: 25 };
     ```
   - **Property Renaming:** Properties can be renamed while maintaining type safety.

2. **Optional and Readonly Properties:**

   - Use `?` for optional properties and `readonly` for read-only properties.
     ```typescript
     interface Car {
       brand: string;
       model: string;
       year?: number; // Optional property
       readonly isElectric: boolean;
     }
     ```
   - **Optional Chaining:** Safely access optional properties without causing runtime errors.

3. **Object Methods:**

   - Define methods within objects with parameter and return types.
     ```typescript
     let calculator: {
       add: (x: number, y: number) => number;
       multiply: (x: number, y: number) => number;
     } = {
       add: (x, y) => x + y,
       multiply: (x, y) => x * y,
     };
     ```
   - **Function Signatures:** Clearly specify function signatures within objects.

4. **Interfaces:**

   - Interfaces provide a cleaner and more reusable way to define object types.

     ```typescript
     interface Person {
       name: string;
       age: number;
     }

     let employee: Person = { name: "Alice", age: 30 };
     ```

   - **Extensibility:** Interfaces can be extended to create more complex types.
