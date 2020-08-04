const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

function changeVis() {
  document.querySelector(".fade-test").classList.toggle("visible");
}

function openContactMenu() {
  document.querySelector(".contact-menu").style = "display: flex";
}

function closeContactMenu() {
  document.querySelector(".contact-menu").style = "display: none";
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
