//enter values
let firstHeading="reek's bithday";
let secondHeading = "<span>countdown...</span>";
let date="july 1,2023 00:00:00";
//target display element
document.title=firstHeading;
let container = document.querySelector(".container");
let boxes = document.querySelector(".countdown-boxes");
let firstPara = document.querySelector(".firstPara").innerHTML=firstHeading;
let secPara = document.querySelector(".secPara").innerHTML=secondHeading;
let dayBox=document.querySelector(".day-box");
let hourBox = document.querySelector(".hour-box");
let minBox = document.querySelector(".min-box");
//target time element
const dayElement = document.querySelector("#days");
const hourElement = document.querySelector("#hour");
const minElement = document.querySelector("#min");
const secondElement = document.querySelector("#sec");
//create date
let applyDate = new Date(date);
//countdown function
function countdown() {
  let futureDate = applyDate;
  let now = new Date();
  let dayHour=now.getHours();
  let diff = futureDate - now;
  let days = Math.floor(diff / 1000 / 60 / 60 / 24);
  let hours = Math.floor((diff / 1000 / 60 / 60) % 24);
  let mints = Math.floor((diff / 1000 / 60) % 60);
  let seconds = Math.floor((diff / 1000) % 60);
  if (diff <= 0) {
    boxes.setAttribute("style", "display:none");
    secPara.setAttribute("style", "display:none");
    firstPara.innerHTML = "happy birthday reek";
    clearInterval(timeInterval);
    return;
  }
  if (diff == -days) {
    firstPara.innerHTML ="happy birthday reek";
    clearInterval(timeInterval);
    return;
  }
  if(dayHour>=4 && dayHour<=13){
    container.setAttribute(
      "Style",
      "background-image:url('https://images.pexels.com/photos/796606/pexels-photo-796606.jpeg')"
    );
  }else if (dayHour >= 14 && dayHour <= 18) {
    container.setAttribute(
      "Style",
      "background-image:url('https://images.pexels.com/photos/574282/pexels-photo-574282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
    );
  } else {
    container.setAttribute(
      "Style",
      "background-image:url('https://images.pexels.com/photos/1729808/pexels-photo-1729808.jpeg')"
    );
  }

  if(days==0){
    dayBox.setAttribute("style", "display:none");
  }
  if(days==0 && hours==0){
    hourBox.setAttribute("style", "display:none");
  }
  if(days==0 && hours==0 && mints==0){
    minBox.setAttribute("style", "display:none");
  }
  
  dayElement.innerHTML=(days<10)?`0${days}`:days;
  hourElement.innerHTML = hours < 10 ? `0${hours}` : hours;
  minElement.innerHTML = mints < 10 ? `0${mints}` : mints;
  secondElement.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}
//set interval
let timeInterval = setInterval(countdown, 1000);
