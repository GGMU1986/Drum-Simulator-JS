

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
        ['track1', 'Track 1'],
        ['track2', 'Track 2'],
        ['track3', 'Track 3']
    ];

    TRACKS.forEach(track => {
        // creating buttons with attributes and appending to correcr HTML ele
        const trackNav = document.querySelector(".drumless");
        let button1 = document.createElement("button")
        let button2 = document.createElement("button")
        button1.innerText = track[1] + " - Play"
        button2.innerText = 'STOP'
        button1.id = track[0];
        button1.classList.add('btn');
        button2.classList.add('stop');
        button2.id = track[0];
        button1.dataset.playing = 'false'
        trackNav.append(button1);
        trackNav.append(button2);
        // creating audio tags with attributes and appending to correcr HTML ele
        const audioDiv = document.getElementById("audio-tags");
        let audio = document.createElement("audio")
        let src = "./sounds/" + track[0] + ".wav";
        audio.src = src;
        audio.dataset.song = track[0]; 
        audioDiv.append(audio);
    })

    function playSound(e) {
        const track = document.querySelector(`audio[data-song="${e.target.id}"]`);

        if (this.dataset.playing === 'false') {
            track.play();
            this.dataset.playing = 'true';
            TRACKS.forEach(track => {
                if (track[0] === e.target.id) this.innerText = track[1] + " - Pause";
            })

        } else {
            track.pause();
            this.dataset.playing = 'false';
            TRACKS.forEach(track => {
                if (track[0] === e.target.id) this.innerText = track[1] + " - Play";
            })
        }  
    }

    function stopSound(e) {
        const track = document.querySelector(`audio[data-song="${e.target.id}"]`);
        track.pause();
        track.currentTime = 0;
        const btn = document.getElementById(`${e.target.id}`)
        btn.dataset.playing = false;
        TRACKS.forEach(track => {
            if (track[0] === e.target.id) btn.innerText = track[1] + " - Play";
        })
    }
    
    const btns = document.querySelectorAll(".btn");
    btns.forEach(btn => {
        btn.addEventListener('click', playSound);
    });

    const stopbtns = document.querySelectorAll(".stop")
    stopbtns.forEach(btn => {
        btn.addEventListener('click', stopSound);
    }); 
});