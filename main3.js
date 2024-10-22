let btn = document.querySelector("#Confirm");
let thank = document.querySelector(".thankyou");
let back = document.querySelector(".back-home");
btn.onclick = function (e) {
  e.preventDefault();
  thank.style.display = "flex";
};
back.onclick = function () {
  window.location.assign("./index.html");
};


