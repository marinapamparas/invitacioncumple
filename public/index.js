const countDownDate = new Date("Jul 5, 2025 19:00:00").getTime();

function setCountDown() {
  const now = new Date().getTime();
  const timeleft = countDownDate - now;

  if (timeleft < 0) {
    clearInterval(intervalID);
    return;
  }

  const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  document.getElementById('cd-days').textContent = days;
  document.getElementById('cd-hrs').textContent = hours;
  document.getElementById('cd-min').textContent = minutes;
  document.getElementById('cd-sec').textContent = seconds;
}

const intervalID = setInterval(setCountDown, 1000);
