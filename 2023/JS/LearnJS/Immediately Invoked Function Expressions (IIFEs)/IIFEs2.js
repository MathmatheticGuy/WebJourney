// Put Function insdie myModule Object to avoid public variable name pollution
// Prevent variable name conflict out side of file
var myModule = ( function() {
    var name = "Hansolo";
        
    // Private members
    function privateFunction() { 
        console.log("I'm hidden");
    } 

    // Public interface
    return {
        publicMethod: function() {
            console.log("Accessible from outside.\nName: " + name);
        }
    };
}) ();

myModule.publicMethod();  // Output: "Accessible from outside"