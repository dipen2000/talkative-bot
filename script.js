const introBtn = document.getElementById("btn");
const textArea = document.getElementById("txtarea");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");
const resumeBtn = document.getElementById("resume");
let currentChar;
//Some global properties related to utterance which are going to remian same for both the buttons
const guestName = prompt("Can I know your name?");
const utterance = new SpeechSynthesisUtterance();
utterance.rate = 1;
utterance.addEventListener("end" , ()=>{

    playBtn.classList.add("active")
    resumeBtn.classList.remove("active");    
    textArea.disabled = false;    
})

playBtn.addEventListener("click",()=>{
    const textFromArea = textArea.value;
    console.log(speechSynthesis.paused);
    console.log(speechSynthesis.speaking);
    if(speechSynthesis.speaking){
        return;
    }  
    textArea.disabled = true;
    utterance.text = textFromArea;
    speechSynthesis.speak(utterance);
});

pauseBtn.addEventListener("click" , ()=>{
    playBtn.classList.remove("active")
    resumeBtn.classList.add("active");
    speechSynthesis.pause();
});

stopBtn.addEventListener("click" , ()=>{
    speechSynthesis.cancel();
});

resumeBtn.addEventListener('click' , ()=>{
    speechSynthesis.resume();
});

introBtn.addEventListener("click",()=>{
    if(speechSynthesis.speaking){
        return;
    }
    utterance.text = `Hello ${guestName}, I welcome you to the website and pardon me if i mis-spoke your name`
    speechSynthesis.speak(utterance);
});


