// set current page in the top links to active

let currentPath = window.location.href;
let navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (element) {
  if (element.href == currentPath) {
    element.classList.add("active");
  }
});

// add ready class to kill the spinner and check for page being scrolled

document.addEventListener("DOMContentLoaded", function () {
  var page = document.getElementById("body");
  page.classList.add("ready");
  window.onscroll = function checkScroll() {
    if (window.pageYOffset != 60) {
      page.classList.add("scrolled");
    } else {
      page.classList.remove("scrolled");
    }
  };
});

// update copyright to the current year

document.getElementById("copyright").innerHTML = new Date().getFullYear();
