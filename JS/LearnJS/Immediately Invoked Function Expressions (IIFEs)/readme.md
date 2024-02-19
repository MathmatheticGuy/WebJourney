Here's a detailed explanation of Immediately Invoked Function Expressions (IIFEs) in JavaScript along with some illustrative examples:

**What are IIFEs?**

* An Immediately Invoked Function Expression (IIFE) is a JavaScript function that is defined and executed immediately as it's encountered in the code.
* IIFEs take the following general form:

```javascript
(function() {
    // Code to be executed immediately
})();
```

* **Key Points:**
    * **Parentheses:** The surrounding parentheses enclose a complete function expression.
    * **Function Call:** The trailing parentheses `()` after the function expression immediately invoke (call) the function. 

**Why Use IIFEs?**

1. **Creating Private Scope (Data Encapsulation):**  
   - Variables and functions declared within an IIFE are not accessible from the global scope. This helps prevent naming conflicts and keeps your code organized.

   ```javascript
   (function() {
       var secretMessage = "This is hidden";
       console.log(secretMessage); // Output: "This is hidden"
   })();

   console.log(secretMessage); // Error: secretMessage is not defined
   ```

2. **Modularization:**
   - IIFEs let you break down your code into smaller, self-contained modules. This helps with code maintainability and reusability.

3. **Avoiding Global Scope Pollution:**
   - By enclosing functionality inside IIFEs, you reduce the number of variables and functions added to the global scope, keeping the global namespace cleaner.

4. **Initializing Values Once:**
   - The code within an IIFE runs only once upon execution. This is useful for setting up initial configurations or performing one-time calculations.

**Examples**

* **Simple Counter:**
   ```javascript
   (function() {
       let count = 0;
       function incrementCounter() {
           count++;  
           console.log(count);
       }
       incrementCounter(); // Output: 1
       incrementCounter(); // Output: 2
   })();
   ```

* **Module Pattern:** 
   ```javascript
   var myModule = (function() {
       // Private members
       function privateFunction() { 
           console.log("I'm hidden");
       } 

       // Public interface
       return {
           publicMethod: function() {
               console.log("Accessible from outside");
           }
       };
   })();

   myModule.publicMethod();  // Output: "Accessible from outside"
   ```

