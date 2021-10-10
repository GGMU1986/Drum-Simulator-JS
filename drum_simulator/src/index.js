

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

    const keys = document.querySelectorAll(".key")

    // adding an event listener to each key to remove class of playing after transition ends
    keys.forEach(key => key.addEventListener('transitionend', removeClass));
    
    //
    // ** drumless tracks section **
    //
    
    const TRACKS = [
        ['btn1', 'track1', 'Track 1'],
        ['btn2', 'track2', 'Track 2'],
        ['btn3', 'track3', 'Track 3']
    ];

    TRACKS.forEach(track => {
        // creating buttons with attributes and appending to correcr HTML ele
        const trackNav = document.querySelector(".drumless");
        let button = document.createElement("button")
        button.innerText = track[2]
        button.id = track[1];
        button.classList.add('btn');
        button.dataset.song = track[1];
        trackNav.append(button);
        // creating audio tags with attributes and appending to correcr HTML ele
        const audioDiv = document.getElementById("audio-tags");
        let audio = document.createElement("audio")
        let src = "./sounds/" + track[1] + ".wav";
        audio.src = src;
        audio.dataset.song = track[1]; 
        audioDiv.append(audio);
    })

    function playSound(e) {
        const track = document.querySelector(`audio[data-song="${e.target.id}"]`);
        // drumless.currentTime = 0;
        track.play();
        //console.log(e.target.id);
    }
    
    const btns = document.querySelectorAll(".btn");
    btns.forEach(btn => {
        btn.addEventListener('click', playSound)
    })

    // function playMusic(e) {
    //     const drumless = document.getElementById("get-crazy");
    //     drumless.currentTime = 0;
    //     drumless.play();
    // }

    // const btn = document.getElementById('btn')
    // const btn2 = document.getElementById('btn2')
    // btn2.addEventListener('click', function(e){
    //     console.log(e);
    // })

    // const btn2 = document.getElementById('btn2')
    // btn2.addEventListener('click', playMusic)
    
})