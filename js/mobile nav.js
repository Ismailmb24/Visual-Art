const navOpener = document.getElementById("nav-opener");
const nav = document.getElementById("second-nav");

navOpener.addEventListener("click", event => {
       event.target.classList.toggle("active");
       nav.classList.toggle("active");
});

