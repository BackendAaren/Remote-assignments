//request 1
const welBlock = document.querySelector(".Wel-page");
const welMessage = welBlock.children[0];

welBlock.addEventListener("click", function () {
  welMessage.textContent = "Have a good time";
});

//request 2
const cont2 = document.querySelector(".Cont-box2");
const button = document.querySelector(".Butt");
button.addEventListener("click", function () {
  cont2.style = "display:flex";
});
