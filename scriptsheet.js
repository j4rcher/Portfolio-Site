function changeVis() {
  document.querySelector(".fade-test").classList.toggle("visible");
}

function openContactMenu() {
  document.querySelector(".contact-menu").style.animation = "fade-in 0.5s forwards";
}

function closeContactMenu() {
  document.querySelector(".contact-menu").style.animation = "fade-out 0.5s forwards";
}

var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

var x = document.querySelector(".testerh1");
console.log(isInViewport(x));
