### TypeScript Functions:

1. **Basic Function with Parameters and Return Type:**

   - Functions in TypeScript can have explicit parameter types and return types.

     ```typescript
     function addNumbers(x: number, y: number): number {
       return x + y;
     }

     let result: number = addNumbers(5, 3);
     console.log(result); // Output: 8
     ```

   - **Parameter Types:** Specify the types of parameters for better type safety.
   - **Return Type:** Define the type of the value the function returns.

2. **Optional and Default Parameters:**

   - Parameters can be marked as optional using the `?` symbol, and default values can be assigned.

     ```typescript
     function greet(name: string, greeting: string = "Hello"): string {
       return `${greeting}, ${name}!`;
     }

     let message: string = greet("Alice");
     console.log(message); // Output: Hello, Alice!
     ```

   - **Optional Parameters:** Allow flexibility by making parameters optional.
   - **Default Values:** Provide default values for parameters.

3. **Function Overloads:**

   - TypeScript allows function overloads to handle multiple argument types and return types.

     ```typescript
     function display(value: number): string;
     function display(value: string): number;
     function display(value: number | string): number | string {
       if (typeof value === "number") {
         return `Number: ${value}`;
       } else {
         return parseInt(value);
       }
     }

     let output: string | number = display(42);
     ```

   - **Overloaded Signatures:** Define multiple function signatures for different input and output types.
   - **Implementation Signature:** Provide the actual implementation of the function.

4. **Arrow Functions and Lexical Scoping:**

   - Arrow functions maintain lexical scoping and have a concise syntax.

     ```typescript
     let multiply = (x: number, y: number): number => x * y;

     let result: number = multiply(3, 4);
     console.log(result); // Output: 12
     ```

   - **Concise Syntax:** Arrow functions offer a shorter syntax for simple functions.
   - **Lexical Scoping:** Arrow functions capture the `this` value from the surrounding context.

These examples showcase various aspects of TypeScript functions, including parameter and return types, optional and default parameters, function overloads, and the usage of arrow functions. Understanding these concepts will enhance your ability to write robust and type-safe functions in TypeScript. Adjust the depth of explanation based on your audience's familiarity with TypeScript and programming concepts.
