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
 // FOR SCROLLIN
 document.addEventListener('DOMContentLoaded', function() {
      const anchors = document.querySelectorAll('a');
   for(anchor of anchors){
      anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetID = this.getAttribute('href');
        const targetElement = document.querySelector(targetID);
        
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });}
    });
