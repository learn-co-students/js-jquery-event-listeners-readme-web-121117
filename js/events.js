//define functions here
function getIt() {
  $("p").on("click", function() {
    alert("Hey!");
  });
}

function frameIt() {
  $("img").on("load", function() {
    $("img").attr("class", "tasty");
  });
}

function pressIt() {
  $("#typing").on("keydown", function(key) {
    if (key.which === 71) {
      alert("You pressed a G!");
    }
  });
}

function submitIt() {
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function() {
  window.getIt();
  window.frameIt();
  window.pressIt();
  window.submitIt();
});
