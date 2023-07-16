let equal_pressed = 0;
let button_input = document.querySelectorAll(".input-button");

let input = document.getElementById("display");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");



button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    }
    input.value += button_class.value;
  });
});


equal.addEventListener("click", () => {
  equal_pressed = 1;
  let inp_val = input.value;
  
  try {
    let solution = eval(inp_val);
    
    if (Number.isInteger(solution)) {
      input.value = solution;
     } 
    
else {
      input.value = solution.toFixed(2);
    }
  } 
  catch (err) {
    alert("invalid input");
  }
});

erase.addEventListener("click",()=>{
  let string=input.innerText.toString();
 input.innerText=string.substring(0, string.length-1);
  input.value=string;
});

clear.addEventListener("click",()=>{
    input.value="";  
     
})
