let highSchoolGrade = 11;
let yourGrade;

switch(highSchoolGrade){
  
  case 9:
    yourGrade = "Freshman";
     break;
  case 10:
    yourGrade = "Sophomore";
     break;
  case 11:
    yourGrade = "Junior";
     break;
  case 12:
    yourGrade = "Senior";
     break;
  default:
    yourGrade = "Invalid";
}


let firstName = "John";
let demo = document.getElementById("demo");

function name(){
    demo.innerHTML = (firstName === "John") ? "Hello John!" : "Hello Human!";

  
}
name();