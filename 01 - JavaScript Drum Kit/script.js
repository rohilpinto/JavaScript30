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

// const kbdButton = document.querySelectorAll("kbd");

// const keys = document.getElementsByClassName("keys")[0];

// keys.addEventListener("click", (e) => {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 

  
//   let targetKey = e.target;

//   if (targetKey != ) return; 
//    console.log(targetKey)

//    if (targetKey) {
//     audio.play();
//    }
// });
