/* 
  Wing Chi Lam
  301244396
  Feb 2023
*/

// IIFE -- Immediately Invoked Function Expression
(function () {
  function Start() {
    console.log("App Started...");

    let deleteButtons = document.querySelectorAll(".btn-danger");

    for (button of deleteButtons) {
      button.addEventListener("click", (event) => {
        if (!confirm("Are you sure?")) {
          event.preventDefault();
          window.location.assign("/business");
        }
      });
    }
  }

  window.addEventListener("load", Start);
})();

var form = document.getElementById("form");
document.getElementById("submit").addEventListener("click", checkInput);

function checkInput(e) {
  e.preventDefault();
  var element = document.getElementById("form").elements;
  var obj = "";
  for (var i = 0; i < element.length; i++) {
    var item = element.item(i);
    obj = obj + " " + item.name + ": " + item.value + "\n";
  }
  // alert(obj); // print alert
  window.confirm(obj);
  //console.log(obj);
  HTMLFormElement.prototype.submit.call(form); //submit form
  document.location.href = "/home"; //redirect to homepage
}
