let myVideo = document.querySelector(".fond"); 
let bouton = document.querySelector(".bouton");
let switchon = document.querySelector(".option");

function playPause() { 
    if (myVideo.paused) {
        myVideo.play(); 
    } else {
        myVideo.pause(); 
    }
}

function onoff() {
    switchon.classList.toggle("active");
    if (switchon.disabled) {
      switchon.disabled = false;
    } else {
      switchon.disabled = true;
    }
}

myVideo.autoplay = true;
myVideo.loop;

bouton.addEventListener("click", () => {
    playPause();
    onoff();
});