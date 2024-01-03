let submit = document.querySelector(".submit");

// this function generate email address
submit.addEventListener("click", () => {
    generateEmail(document.getElementById("form"));
});

genrateEmail = (form) => {
    document.getElementById("email").innerHTML = 
    formElement["first"].value 
    + "." 
    + form.elements["last"].value 
    + "@park.edu";
    
    form.reset();
    form.elements["first"].focus(); // end generate email
}

// replace drop down btn context by selected context
let dropdown = document.querySelector(".dropdown");
let dropdownBtn = document.querySelector(".dropbtn");
let dropdownContents = document.querySelectorAll(".dropdown-content");

// Add event listener to each dropdown content
dropdownContents.forEach((content) => {
    content.addEventListener("click", () => {
        let clickedContext = content.textContent;
        console.log(clickedContext); // Replace with your desired logic
        
        // get textContent of clicked dropdown-content element
        let clickedElementText = content.textContent;
        console.log(clickedElementText);
        
        // change dropbtn context
        dropdownBtn.textContent = "Hello";
    });
});

