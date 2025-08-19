let navbar = document.querySelector('.navbar');
const time = document.getElementById("time");
const date = document.getElementById("day");

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
}

window.onscroll = () => {
   navbar.classList.remove('active');
}


document.addEventListener("DOMContentLoaded", () => {
  function updateTimeAndDay() {
    const now = new Date();
    const utcTime = now.toUTCString().split(" ")[4];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDay = days[now.getUTCDay()];

    time.innerText = utcTime;
    date.innerText = currentDay;
  }

  updateTimeAndDay();
  setInterval(updateTimeAndDay, 60000);
});



