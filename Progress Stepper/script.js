let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let circle = document.querySelectorAll(".circle");
let progress = document.querySelector(".progress");
let value = 1;
console.log(circle.length);
console.log(NodeList,1);
console.log(circle[0]);
console.log(circle[1]);
console.log(circle[2]);
console.log(circle[3]);

//SECOND ATTEMPT

// function nextStep(){
//     progress.style.width += "110px";    
//     if (value > 0) {
//         value++;
//         prev.disabled = false;    
//         // circle[value].classList.add('active');
//         circle[value].style.borderColor = '#3498db'
//         console.log(value);
//         circle[value +1].style.borderColor = '#3498db'
//     }
//     if (value == 3) {
//         next.disabled = true;
//         prev.disabled = false;
//     }
// }

// function prevStep(){
//     progress.style.width -= "110px";
    
//     if (value = 0) {
//         prev.disabled = true;    
//         circle[value].style.borderColor = '#e0e0e0'
//         console.log(value);
//         console.log(circle[value]);   
//     }
//     else{
//         circle[value].style.borderColor = '#e0e0e0'
//         value --;
//     }
//     console.log("prev");
//     console.log(value);
// }

// FIRST ATTEMPT

next.addEventListener("click",function(){

    if (value >= 1) {
        circle[value].classList.add('active');
        prev.disabled = false;    
        value++;
    }
    if (value == 3) {
        next.disabled = true;
        prev.disabled = false;
        circle[value].classList.remove('active');
     }
    console.log(circle[value]);
    console.log("next");
});

prev.addEventListener("click",function(){
    
    value -=1;
    console.log(value);
    if (value ==3) {
        next.disabled = true;    
        circle[value].style.borderColor = '#e0e0e0'
        
    }
    else{
        circle[1].style.borderColor = '#e0e0e0'

    }
    console.log("prev");
});

//2-08-2021 