const clockContainer = document.querySelector(".js-clock"),
  electronicClock = clockContainer.querySelector("h1");

function getTime() {
  const clockDate = new Date();
  const Hours = clockDate.getHours();
  const Minutes = clockDate.getMinutes();
  const Seconds = clockDate.getSeconds();
    Seconds < 10 ? `0${Seconds}` : Seconds;
  
  electronicClock.innerHTML = `${Hours < 10 ? `0${Hours}` : Hours}:${Minutes < 10 ? `0${Minutes}` : Minutes}:${Seconds < 10 ? `0${Seconds}` : Seconds}`;
}

function init(){
  getTime();                // 이 라인이 없으면 처음 사이트를 띄웠을 때 00:00:00이 뜸. 어글리!
  setInterval(getTime, 1000);
}

init();