document.getElementById("startTimeout").addEventListener("click", function () {
  var countdownElement = document.getElementById("countdown");
  var countdown = 5;

  function updateCountdown() {
    countdownElement.innerHTML = countdown + "s";
    countdown--;

    if (countdown < 0) {
      countdownElement.innerHTML = "";
      var h1 = document.createElement("h1");
      h1.innerHTML = "Boom!";
      document.body.appendChild(h1);
      clearInterval(timer);
    }
  }

  var timer = setInterval(updateCountdown, 1000);
});
