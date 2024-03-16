const btn = document.getElementById("btn");

const panel = document.getElementById("panel");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    // to access html we use document.
    const rgbaColor = rgba();
    console.log(rgbaColor);

    document.body.style.backgroundColor = rgbaColor;
    // access color class from span tag  
    color.textContent = rgbaColor;
    console.log(rgbaColor);
});

// rgba (num, num, num, alpha)
let rgba = () => {
    let rgba = "";    
    let alpha = randomNum(10)/10;

    for (let i=0;i<3;i++){
        
        const random = randomNum(255);
        rgba+=random;
        rgba += ",";
    }
    console.log("alpha",alpha);
    rgba+=alpha;
    const rgbaColor = "rgba(" + rgba + ")"; 
    return rgbaColor; 
}

let randomNum = (max) => {
    return Math.floor(Math.random()*max);
}