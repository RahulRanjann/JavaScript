let value = document.querySelector("#value");
let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");
let reset = document.querySelector("#reset");

// function increaseCount() {
//   if (count.innerHTML >= 0) {
//     count.style.color = "Green";
//     count.innerHTML = parseInt(count.innerHTML) + 1;
//   } else if (count.innerHTML == 0) {
//     count.style.color = "black";
//     count.innerHTML = parseInt(count.innerHTML) + 1;
//   } else {
//     count.innerHTML = parseInt(count.innerHTML) + 1;
    
//   }
// }

// function decreaseCount() {
//   if (count.innerHTML <= 0) {
//     count.style.color = "red";
//     count.innerHTML = parseInt(count.innerHTML) - 1;
//   } else if (count.innerHTML == 0) {
//     count.style.color = "black";
//     count.innerHTML = parseInt(count.innerHTML) - 1;
//   } else {
//     count.innerHTML = parseInt(count.innerHTML) - 1;
    
//   }
// }

// function resetCount() {
//   count.style.color = "black";
//   count.innerHTML = 0;
// }

var count = 0;

function increaseCount() {
  count++;
  if(count > 0){
    value.style.color = 'green';
  }
  if(count == 0){
    value.style.color = 'black';
  }
  value.innerHTML = count;
}

function decreaseCount() {
  count--;
  if(count < 0){
    value.style.color = 'red';
  }
  if(count == 0){
    value.style.color = 'black';
  }
  value.innerHTML = count;
}

function resetCount() {
  value.style.color = "black";
  value.innerHTML = 0;
  count = 0;
}