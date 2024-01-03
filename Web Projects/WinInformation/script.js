const passInput = document.getElementById('pass');
const nameInput = document.getElementById('name');


function check(){
    if (nameInput.value == "" || passInput.value == " "){
        alert("pls input user name ");
    }
}

nameInput.focus();


