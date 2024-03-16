let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}


let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


// cart-container
// Get all elements with the class 'removeBtn'
var removeButtons = document.getElementById('.removeBtn');

// Loop through each remove button and add a click event listener
removeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        // Find the parent cart item and remove it
        var cartItem = button.closest('.cart-item');
        cartItem.remove();

        // Recalculate and update the total price
        updateTotalPrice();
    });
});

 