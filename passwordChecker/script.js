let password = document.getElementById("passcode");
let button = document.querySelector("toggel");
let clear = document.querySelector("clear");
let output = document.getElementById("output");
let strengthbar = document.querySelector(".bar");


function toggle() {
    if (password.type === "password") {
        password.type = "text";
    }
    else {
        password.type = "password";
    }
}
function clear() {
    strengthbar.style.background="";
    strengthbar.style.transition = '';
    strengthbar.style.boxShadow = '';
    output.innerHTML=null;
}

function check() {
    let strength=0;
    if (password.value.match(/[a-z]+/)) {
        strength += 1;
    }
    if (password.value.match(/[A-Z]+/)) {
        strength += 1;
    }
    if (password.value.match(/[0-9]+/)) {
        strength += 1;
    }
    if (password.value.match(/[$@#&!]+/)) {
        strength += 1;
    }
    

    switch (strength) {
        case 0:
            strengthbar.style.background="";
            strengthbar.style.transition = '';
            strengthbar.style.boxShadow = '';
            output.innerHTML=null;
            break;
        case 1:
            strengthbar.style.background="red";
            strengthbar.style.transition = 'all 0.2s ease-in-out';
            strengthbar.style.boxShadow = 'rgb(255 0 0) 0px 5px 15px';
            output.innerHTML="easy";
            break;
        case 2:
            strengthbar.style.background="red";
            strengthbar.style.transition = 'all 0.2s ease-in-out';
            strengthbar.style.boxShadow = 'rgb(255 0 0) 0px 5px 15px';
            output.innerHTML="Mediam";
            break;
        case 3:
            strengthbar.style.background="rgba(208, 255, 0, 0.4)";
            strengthbar.style.transition = 'all 0.2s ease-in-out';
            strengthbar.style.boxShadow = 'rgb(255 0 0) 0px 5px 15px';
            output.innerHTML="Modrate";
            break;
        case 4:
            strengthbar.style.background="green";
            strengthbar.style.transition = 'all 0.2s ease-in-out';
            strengthbar.style.boxShadow = 'rgb(255 0 0) 0px 5px 15px';
            output.innerHTML="Strong";
            break;
        default:
            break;
    }
    
}

password.addEventListener("keyup", check);