const spinner = document.getElementById("spinner");
const prize = document.getElementById("prize");

spinner.addEventListener("click", () => {
  const degrees = Math.floor(Math.random() * 360);
  spinner.style.transform = `rotate(${degrees}deg)`;
  
  if (degrees >= 0 && degrees < 60) {
    prize.innerHTML = "You won a free spin!";
  } else if (degrees >= 60 && degrees < 120) {
    prize.innerHTML = "You won a $10 gift card!";
  } else if (degrees >= 120 && degrees < 180) {
    prize.innerHTML = "You won a $25 gift card!";
  } else if (degrees >= 180 && degrees < 240) {
    prize.innerHTML = "You won a $50 gift card!";
  } else if (degrees >= 240 && degrees < 300) {
    prize.innerHTML = "You won a $100 gift card!";
  } else if (degrees >= 300 && degrees < 360) {
    prize.innerHTML = "You won a $500 gift card!";
  }
});
