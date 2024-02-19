// create Namespace A to avoid conflict with name in script 1 & 2
var A = {};
// Name become a private variable inside the object
// Private mean only function inside A can access it
A.name = "Marrie";

// Declare Namespace function
A.hi = () => {
    // Connect to name space variable specifically
    console.log("Ich Liebe Dich, " + A.name);
}