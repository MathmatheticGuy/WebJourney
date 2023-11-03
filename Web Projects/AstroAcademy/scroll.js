// Get the button
let my_button = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => {
    scrollFunction();
};


let scrollFunction = () => {
    if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
    ) {
        my_button.style.display = "block";
    } else{
        my_button.style.display = "none"; 
    }
}

// When the user clicks on the button, scroll to the top of the document
my_button.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}