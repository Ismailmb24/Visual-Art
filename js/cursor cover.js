const cusor_cover = document.getElementById("cusor-cover");
const inner_c_cv = document.getElementById("inner-c-cv");
document.addEventListener("mousemove", (e) => {
    inner_c_cv.classList.add("active");
    const x = e.screenX;
    const y = e.screenY;
    cusor_cover.style.top = y - 80 + "px";
    cusor_cover.style.left = x - 10 + "px"; 
}, false);
setInterval(() => {
    inner_c_cv.classList.remove("active");
}, 300);
