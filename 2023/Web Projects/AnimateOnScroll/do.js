const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } 
        else {
            entry.target.classList.remove('show');
        }
    });
}); 

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } 
        else {
            entry.target.classList.remove('show');
        }
    });
}); 


const hiddenElement = document.querySelectorAll('.hidden');
const hiddenElement2 = document.querySelectorAll('.hidden2');

//? observe all the hidde elements
hiddenElement.forEach((el) => observer.observe(el));
hiddenElement2.forEach((el) => observer2.observe(el));

