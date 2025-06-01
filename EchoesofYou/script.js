document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('characterSelect').classList.remove('hidden');
});

document.querySelectorAll('.echo').forEach(button => {
  button.addEventListener('click', () => {
    const echo = button.textContent;
    document.getElementById('selectedEcho').textContent = `You selected: ${echo}`;
    document.getElementById('collapseClock').classList.remove('hidden');
    startTimer();
  });
});

function startTimer() {
  let timeLeft = 60;
  const timer = document.getElementById('timer');

  const countdown = setInterval(() => {
    timeLeft--;
    let minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    let seconds = String(timeLeft % 60).padStart(2, '0');
    timer.textContent = `${minutes}:${seconds}`;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      timer.textContent = "00:00";
      alert("Collapse has begun. Your Echo is locked.");
    }
  }, 1000);
}
