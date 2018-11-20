(function() {
  // turn off html validation when js can be executed
  document
    .querySelectorAll("form")
    .forEach(element => element.setAttribute("novalidate", "true"));
  // select target form
  var dialog_wdw = document.querySelector(".modal");

  // select all buttons which can show/hide modal window
  document
    .querySelectorAll(".btn_login, .btn__close")
    .forEach(element => element.addEventListener("click", classHideToggle));

  function classHideToggle() {
    dialog_wdw.style.display === "none"
      ? (dialog_wdw.style.display = "block")
      : (dialog_wdw.style.display = "none");
    dialog_wdw.classList.toggle("hidden");
  }
})();
