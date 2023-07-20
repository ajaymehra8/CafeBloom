let menuBar=document.querySelector(".navItems");
let buttonClicked=true;
document.querySelector("#toggle").addEventListener("click",()=>{
if(buttonClicked){
 menuBar.classList.add("navItemsA");
  buttonClicked=false;
} else{
 menuBar.classList.remove("navItemsA");
  buttonClicked=true;
} });
