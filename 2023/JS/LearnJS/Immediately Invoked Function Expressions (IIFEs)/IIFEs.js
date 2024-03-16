//! Immediately Invoked Function Expressions (IIFEs)
//! Private and Public Variable in JS: 2 Way to achieve variable name public safty. 

//! 1st: Use Name Space
// Wrap () around function a to turn it into an Object 
(function (window) {
    var Warrior = {};
    Warrior.name = "Manürtöx";
    Warrior.age = 23;

    Warrior.Introduce = () => {
        console.log("> Private Access")
        console.log("Hallo " + Warrior.name);
        console.log("Ich bin " + Warrior.age + " Jahr alt");
    }
    Warrior.Introduce();
    
    
    
    
    
    var Soldier = {};
    Soldier.name = "Lieu";
    Soldier.age = 23;

    Soldier.CallName = () => {
        console.log("> Public Access")
        console.log("Hallo " + Soldier.name);
    }
    // adding () behind to declare this as a function
    // This function is Private 
    
    // Use window to make this function public
    window.Soldier = Soldier;

}) (window);
// Conclude: a() become an Object (a())() of a function of the file.  
Soldier.CallName();


//! 2nd: Put function inside of a variable
var myModule = (function() {
    var name = "Dan";
        
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