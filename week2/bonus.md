### Destructuring Arrays:

1. **Exploring Planets:**

   - Unpack values from an array describing planets into separate variables.

     ```typescript
     let planetsInfo: [string, number, boolean] = ["Earth", 3, true];
     let [planetName, numberOfMoons, inhabited] = planetsInfo;

     console.log(`Planet: ${planetName}`);
     console.log(`Moons: ${numberOfMoons}`);
     console.log(`Inhabited: ${inhabited}`);
     ```

2. **Skipping Asteroids:**

   - Skip irrelevant values when unpacking data about celestial bodies.

     ```typescript
     let celestialBodies: [string, number, boolean, string] = [
       "Mars",
       2,
       false,
       "asteroid belt",
     ];
     let [, moons, isHabitable] = celestialBodies;

     console.log(`Moons: ${moons}`);
     console.log(`Habitable: ${isHabitable}`);
     ```

3. **Rest of the Galaxy:**

   - Use the rest syntax to capture information about other celestial bodies.

     ```typescript
     let [firstPlanet, ...restOfTheGalaxy] = [
       "Venus",
       "Mercury",
       "Saturn",
       "Jupiter",
     ];

     console.log(`First Planet: ${firstPlanet}`);
     console.log(`Rest of the Galaxy: ${restOfTheGalaxy.join(", ")}`);
     ```

### Destructuring Objects:

1. **Spy Mission:**

   - Unpack properties from an object representing a spy's profile into separate variables.

     ```typescript
     let spyProfile = {
       codename: "Shadow",
       age: 32,
       skills: ["stealth", "infiltration"],
     };
     let { codename, age, skills } = spyProfile;

     console.log(`Agent ${codename}, Age: ${age}`);
     console.log(`Skills: ${skills.join(", ")}`);
     ```

2. **Personalized Greeting:**

   - Rename variables during the destructuring assignment for a personalized greeting.

     ```typescript
     let user = { username: "TechWizard", points: 1500 };
     let { username: alias, points: score } = user;

     console.log(`Welcome, ${alias}! Your current score: ${score}`);
     ```

3. **Setting Default Values:**

   - Provide default values for properties to handle undefined or null values.

     ```typescript
     let employee = { name: "Alice", department: "HR" };
     let { name, department, salary = 50000 } = employee;

     console.log(`${name} works in ${department} and earns $${salary}`);
     ```

### Function Parameter Destructuring:

1. **Detective Case Files:**

   - Destructure an object representing a detective's case files within a function parameter.

     ```typescript
     function analyzeCase({
       caseName,
       suspect,
       evidence,
     }: {
       caseName: string;
       suspect: string;
       evidence: string[];
     }): void {
       console.log(`Investigating ${caseName}`);
       console.log(`Suspect: ${suspect}`);
       console.log(`Evidence: ${evidence.join(", ")}`);
     }

     let currentCase = {
       caseName: "Operation Phantom",
       suspect: "Mr. X",
       evidence: ["fingerprints", "security footage"],
     };
     analyzeCase(currentCase);
     ```

     greeting : string = `Hello my name is ${name} !`

2. **Recipe Ingredients:**

   - Destructuring in function parameters for a cooking recipe.

     ```typescript
     function prepareDish({
       dishName,
       ingredients,
     }: {
       dishName: string;
       ingredients: string[];
     }): void {
       console.log(`Preparing ${dishName}`);
       console.log(`Ingredients: ${ingredients.join(", ")}`);
     }

     let recipe = {
       dishName: "Spaghetti Bolognese",
       ingredients: ["pasta", "tomato sauce", "ground beef"],
     };
     prepareDish(recipe);
     ```

These more imaginative examples showcase how destructuring in TypeScript can be applied to a variety of scenarios, from exploring planets to analyzing detective case files. The flexibility and readability of this feature make it a valuable tool for working with complex data structures.
