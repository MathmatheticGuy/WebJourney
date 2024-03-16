
const passInput = document.getElementById('pass');
const nameInput = document.getElementById('name');
const result = document.getElementById('result');
const basic = document.getElementById('.basic');

passInput.focus();
function isPowerOfTwo(n) {
    if (n === 0) {
        return false;
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = Math.floor(n / 2);
    }
    return true;
}


function check() {
    if (isPowerOfTwo(passInput.value)) {
        alert("Pass input is true");
        result.innerHTML = "Yes, the power of 2 is: " + passInput.value;
    } else {
        alert("Pass input is false");
        result.innerHTML = "No, the power of 2 isn't: " + passInput.value;
    }
}

// Hide p tag when clicked
$(document).ready(function(){
    $(".advance").click(function(){
        $(".bomba").show();
    });
});


$(document).ready(function(){
    $(".basic").click(function(){
        $(".bomba").hide();
    });
});


checkClicked = () => {
    $(document).on("click","#checkbox1", function (event) {
        alert(event.target.id);
    }); 
    $(document).on("click","#checkbox2", function (event) {
        alert(event.target.id);
    }); 
    $(document).on("click","#checkbox3", function (event) {
        alert(event.target.id);
    });     
}

let hit = () => {
    $(document).ready(function(){
        if ($('#checkbox1').is(':checked')) {
            alert("Thank you, Checkbox1 is checked. ID: " + $('#checkbox1').attr('id'));
        } else if ($('#checkbox2').is(':checked')) {
            alert("Thank you, Checkbox2 is checked. ID: " + $('#checkbox2').attr('id'));
        } else if ($('#checkbox3').is(':checked')) {
            alert("Thank you, Checkbox3 is checked. ID: " + $('#checkbox3').attr('id'));
        } else {
            alert("Checkbox is not checked");
        }
    });
};

$(document).ready(function(){
    $(".submit_btn").click(function(){
        hit();
        
    });
});


