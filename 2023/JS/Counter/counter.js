let count = document.querySelector(".count");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

const text = document.querySelector(".font");
const button = document.getElementById("ClickMe");

button.addEventListener("click", () =>{
    text.style.color = "red";
});


let fontSize = parseInt(el.style.fontSize);
child.style.fontSize = (fontSize + 1) + 'px';

const vars = [];
let fillArray = (array) => {
    for (let i=0; i<100; i++){
        random = Math.random();
        if (random > 0.1 && random < 0.3){
            array.push(1+random)
        }
    }
    console.log(vars);    
}
fillArray(vars);


let value = 0;
increase.addEventListener("click", () => {
    value+=1;
    count.textContent = value;
    console.log(value);
    // change border width
    value = increaseBorder(value);
});

// how to save data 
reset.addEventListener("click", () => {
    value = 0;
    count.textContent = value;
    child1.style.borderWidth = value
    console.log(value);

    vars.length = 0;
    fillArray(vars);
});

decrease.addEventListener("click", () => {
    if (value > 0){
        value-=1
    }
    else{
        alert("Minimum Reached");
    }
    count.textContent = value;
    child1.style.borderWidth = value;
    console.log(value);
    value = decreaseBorder(value);
    
});



let increaseBorder = (value) => {
    
    // change border width
    randomVar = Math.floor(value * vars[randomNum(vars.length)]);
    console.log("random:", randomVar);
    console.log("random:", vars[randomNum(vars.length)]);
    
    child1.style.borderWidth = randomVar + "px";
    
    // change border radius
    // child1.style.borderRadius = value**1.46 + "px";
    
    // change border color
    const rgbaColor = rgba(); 
    child1.style.borderColor = rgbaColor;
    return randomVar  
};

let decreaseBorder = (value) => {
    const vars = [1.05, 1.11, 1.15,1.3,1.2];
    // change border width
    randomVar = Math.floor(value / vars[randomNum(vars.length)]);
    console.log("random:", randomVar);
    child1.style.borderWidth = randomVar + "px";
    
    // change border radius
    // child1.style.borderRadius = value**1.46 + "px";
    
    // change border color
    const rgbaColor = rgba(); 
    child1.style.borderColor = rgbaColor;
    return randomVar  
};

// rgba (num, num, num, alpha)
let rgba = () => {
    let rgba = "";    
    let alpha = randomNum(10)/10;

    for (let i=0;i<3;i++){
        
        const random = randomNum(255);
        rgba+=random;
        rgba += ",";
    }
    rgba+=alpha;
    const rgbaColor = "rgba(" + rgba + ")"; 
    return rgbaColor; 
}

let randomNum = (length) => {
    return Math.floor(Math.random()*length);
}

