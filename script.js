document.getElementById("startTimeout").addEventListener("click", function () {
  const countdownElement = document.getElementById("countdown");
  let countdown = 5;

  function updateCountdown() {
    countdownElement.innerHTML = countdown + "s";
    countdown--;

    if (countdown < 0) {
      countdownElement.innerHTML = "";
      const h1 = document.createElement("h1");
      h1.innerHTML = "Boom!";
      document.body.appendChild(h1);
      clearInterval(timer);
    }
  }

  const timer = setInterval(updateCountdown, 1000);
});
