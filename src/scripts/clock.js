function clock() {
  const date = new Date();
  const second = date.getSeconds();
  const minute = date.getMinutes();
  const hour = date.getHours();
  const secondDegrees = (second / 60) * 360 + 90;
  const minuteDegrees = (minute / 60) * 360 + (second / 60) * 6 + 90;
  const hourDegrees = (hour / 12) * 360 + (minute / 60) * 30 + 90;
  const secondHand = document.querySelector(".clock-dial-second");
  const hourHand = document.querySelector(".clock-dial-hour");
  const minuteHand = document.querySelector(".clock-dial-minute");
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
}
clock();
setInterval(clock, 1000);
