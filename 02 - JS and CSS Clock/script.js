const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
// console.log(secondHand);

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  // This will give you the percentage of a second, to be used in transform
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();

  const minsDegrees = ((mins / 60) * 360) + 90;
// This will give you the percentage of a minute, to be used in transform

minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  if(seconds==0){
    secondHand.style.transitionDuration = '0s';
    minHand.style.transitionDuration = '0s';
    hourHand.style.transitionDuration = '0s';
   } else {
    secondHand.style.transitionDuration = '0.05s';
    minHand.style.transitionDuration = '0.05s';
    hourHand.style.transitionDuration = '0.05s';
   }
  
}

setInterval(setDate, 1000);
