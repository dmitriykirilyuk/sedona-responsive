(function() {
  var hamburger = document.querySelector(".main-header__menu-toggle");
  var menu = document.querySelector(".navigation");

  hamburger.addEventListener("click", function(event) {
    event.preventDefault();
    menu.classList.toggle("navigation--show");
  });

  hamburger.addEventListener("secondclick", function(event) {
    event.preventDefault();
    menu.classList.toggle("navigation");
  });
})();
