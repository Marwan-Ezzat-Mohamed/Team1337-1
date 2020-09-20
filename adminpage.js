const body = document.body;
const menuLinks = document.querySelectorAll(".admin-menu a");
const collapseBtn = document.querySelector(".admin-menu .collapse-btn");
const toggleMobileMenu = document.querySelector(".toggle-mob-menu");
const collapsedClass = "collapsed";

collapseBtn.addEventListener("click", function() {
  this.getAttribute("aria-expanded") == "true"
    ? this.setAttribute("aria-expanded", "false")
    : this.setAttribute("aria-expanded", "true");
  this.getAttribute("aria-label") == "collapse menu"
    ? this.setAttribute("aria-label", "expand menu")
    : this.setAttribute("aria-label", "collapse menu");
  body.classList.toggle(collapsedClass);
});


for (const link of menuLinks) {
  link.addEventListener("mouseenter", function() {
    body.classList.contains(collapsedClass) &&
    window.matchMedia("(min-width: 768px)").matches
      ? this.setAttribute("title", this.textContent)
      : this.removeAttribute("title");
  });
}
function darkMode(){
        localStorage.bgColor= document.getElementById("dark").value;
        if(localStorage.bgColor=='2'){     
        document.getElementById('header').style.cssText='color:#fff;background:#333;';
      document.body.classList.toggle("dark-mode");
       
        }
        
        else{
                document.getElementById('header').style.cssText='color:#000000;background:#fff;';
                document.getElementById('content').style.cssText='color:#000000;background:f0f1f6;blockColor:#f0f1f6;';
          document.body.classList.toggle("dark-mode");
        }
}