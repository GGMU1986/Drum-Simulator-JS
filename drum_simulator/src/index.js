

document.addEventListener("DOMContentLoaded", () => {
    const SOUNDS = [
        ["KeyA", "COWBELL"],
        ["KeyS", "HIHAT"],
        ["KeyD", "KICK"],
        ["KeyF", "OPENHIHAT"],
        ["KeyJ", "SNARE"],
        ["KeyK", "TOM"],
        ["KeyL", "RIDE"],
        ["Semicolon", "CRASH"],
    ]

    SOUNDS.forEach(pair => {
        let audio = document.createElement("audio");
        const audioDiv = document.getElementById("audio-tags");
        audioDiv.append(audio);
        let src = "./sounds/" + pair[1] + ".wav";
        audio.src = src;
        audio.dataset.key = `${pair[0]}`;
    })
    
    window.addEventListener('keydown', function(e) {
        const audio = document.querySelector(`audio[data-key="${e.code}"]`)
        const key = document.querySelector(`.key[data-key="${e.code}"]`)
        audio.currentTime = 0; // web audio API method that rewinds .wav to beginning on each keydown
        audio.play();
        key.classList.add('playing')
    });

    function removeClass(e) {
        this.classList.remove('playing');
    }
    
    function playSound(e) {
        const drumless = document.getElementById("get-lit");
        drumless.currentTime = 0;
        drumless.play();
    }

    function playMusic(e) {
        const drumless = document.getElementById("get-crazy");
        drumless.currentTime = 0;
        drumless.play();
    }

    const keys = document.querySelectorAll(".key")
    //console.log(keys)
    // adding an event listener to each key to remove class of playing after transition ends
    keys.forEach(key => key.addEventListener('transitionend', removeClass));

    const btn = document.getElementById('btn')
    btn.addEventListener('click', playSound)

    const btn2 = document.getElementById('btn2')
    btn2.addEventListener('click', playMusic)
    
})