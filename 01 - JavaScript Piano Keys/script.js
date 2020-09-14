window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // e.keycode will get the keycode of your pressed key and will only log the data-key keycode if you press something else it will give you a null
  if (!audio) return; // stop the funtion from running all together
  audio.currentTime = 0;
  audio.play();

  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  key.style.background = "#c9c9c9";

  key.classList.add("playing");

  // console.log(audio);
});

window.addEventListener("keyup", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // e.keycode will get the keycode of your pressed key and will only log the data-key keycode if you press something else it will give you a null
  if (!audio) return; // stop the funtion from running all together
  // audio.currentTime = ; // sets the sample time to 0
  audio.play(); // starts the audio

  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  key.style.background = " rgba(0, 0, 0, 0.4)";
  key.classList.remove("playing");

  // console.log(audio);
});

const flex = document.getElementsByClassName("flex")[0];

window.addEventListener("click", (e) => {
  // let kbd = document.getElementsByTagName("kbd");
  let target = e.target;
  let kbd = document.querySelector("");
  console.log(kbd);
  // console.log(target);
  // if (target == "kbd") {
  //   console.log("something");
  // }

  
})