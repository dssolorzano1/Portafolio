const template = document.createElement('template');
template.innerHTML = `<style>
body, h1,h2,h3,h4,h5,h6 {font-family: "Montserrat", sans-serif}
    .w3-row-padding img {margin-bottom: 12px}
      </style>}`;


// Open and close sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "60%";
    document.getElementById("mySidebar").style.display = "block";
}
  
function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
}
 

window.customElements.define('my-rating', Rating);
