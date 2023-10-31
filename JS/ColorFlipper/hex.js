const hex = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");

btn.addEventListener("click", () =>{
    // to access html we use document.
    let hexColor = "#";
    for (let i=0; i<6; i++) {
        const random = randomNum();
        hexColor += hex[random];
    }
    console.log(hexColor);
    document.body.style.backgroundColor = hexColor;

});

let randomNum = () => {
    return Math.floor(Math.random() * hex.length);
};