//adding function to the scroll on top button

//getting the button from html
let button = document.querySelector("#btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollOnTop();
};

function scrollOnTop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
button.addEventListener("click", backOnTop);

function backOnTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}