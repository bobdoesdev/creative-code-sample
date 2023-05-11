const cat = document.querySelector(".cat");
    let x = 0;
    let y = 0;
    let xSpeed = 5;
    let ySpeed = 5;

function initBounce() {
    x += xSpeed;
    y += ySpeed;
    if (x + 303 > window.innerWidth || x < 0) {
        xSpeed = -xSpeed;
    }
    if (y + 280 > window.innerHeight || y < 0) {
        ySpeed = -ySpeed;
    }
    cat.style.left = x + "px";
    cat.style.top = y + "px";

    requestAnimationFrame(initBounce);
}
