/**
 * This file is to collapse/expand content
 */
 var collapsible = document.getElementsByClassName("collapsible");
 var i;
 
 for (i = 0; i < collapsible.length; i++) {
   collapsible[i].addEventListener("click", function() {
     this.classList.toggle("active");
     var content = this.nextElementSibling;
     if (content.style.display === "block") {
       content.style.display = "none";
     } else {
       content.style.display = "block";
     }
   });
 }

 let menuIcon = document.getElementById("menu-icon");
 menuIcon.addEventListener("click", (e) => {
   if(e.style.display === "block") {
     e.style.display = "none";
   } else {
     e.style.display = "block";
   }
 });