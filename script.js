let timerInterval;
let timeLeft = 111160;

function startTimer() {
  clearInterval(timerInterval);
  displayTimeLeft(timeLeft);
  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(timerInterval);
      document.getElementById('timer').textContent = 'Time\'s up!';
    } else {
      displayTimeLeft(timeLeft);
    }
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const display = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  document.getElementById('timer').textContent = display;
}
