// create Namespace A to avoid conflict with name in script 1 & 2
var B = {};
B.name = "Hannah";

B.hello = function() {
    console.log("Entschuldigung " + B.name);
}

