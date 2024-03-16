let link = document.querySelector(".link");
const nav_toggle = document.querySelector(".nav-toggle");

const main_logo = document.querySelector(".main-logo"); 
const sub_logo = document.querySelector(".sub-logo"); 

//? 3 WAYS TO TOGGLE NAVIGATION
// let count = 0;
// nav_toggle.addEventListener("mouseout", () => {
//     count++;
//     console.log(count);
//     if (count % 2 != 0){
//         link.className = "show-link";        
//     }
//     else{
//         link.className = "link";

//     }
// });


// nav_toggle.addEventListener("click", () => {
//     if (link.classList.contains("show-link")){
//         link.classList.remove("show-link");
//     }
//     else{
//         link.classList.add("show-link");
//     }
// });


nav_toggle.addEventListener("click", () => {
    link.classList.toggle("show-link");
});


//? LOGO COUNT ANIMATION 
let sub_count = 0;
sub_logo.addEventListener("mouseout", () => {
    sub_count++;
    if (sub_count > 9){
        sub_count = 0;
    }
    main_logo.textContent = "Tr" + sub_count + "ll";
});

main_logo.addEventListener("mouseout", () => {
    sub_count--;
    if (sub_count < 0){
        sub_count = 9;
    }
    
    main_logo.textContent = "Tr" + sub_count + "ll";
});

