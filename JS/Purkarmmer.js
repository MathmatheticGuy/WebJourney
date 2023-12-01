// CLOSURE

function makeMultiplier (multiplier) {
    function b(){
        console.log("Multiplier is: " + multiplier);
    }
    b();

    // this save the value inside it
    return (
        function (x) {
            return multiplier * x;
        }
    );
}
// equal to var multiplier = 2;
var doubleAll = makeMultiplier(2);
console.log(doubleAll)
console.log(doubleAll(10)); //? its own execute environment 

