     

document.addEventListener("DOMContentLoaded", () => {
    
    //
    // Creating audio tags and giving them the drum sound source 
    //

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
    
    const SOUNDS2 = [
      ["KeyE", "kawhi"],
      ["KeyR", "cartoon-jump"],
      ["KeyI", "gangsta-paradise"],
      ["KeyO", "batman"],
      ["KeyC", "wizard"],
      ["KeyN", "MK"],
      ["KeyW", "dj"]
    ]

    SOUNDS.forEach(pair => {
        let audio = document.createElement("audio");
        const audioDiv = document.getElementById("audio-tags");
        audioDiv.append(audio);
        let src = "./drum_simulator/sounds/" + pair[1] + ".wav";
        audio.src = src;
        audio.dataset.key = `${pair[0]}`;
    })
    
    SOUNDS2.forEach(pair => {
        let audio = document.createElement("audio");
        const audioDiv = document.getElementById("audio-tags");
        audioDiv.append(audio);
        let src = "./drum_simulator/sounds/" + pair[1] + ".mp3";
        audio.src = src;
        audio.dataset.key = `${pair[0]}`;
    })

    //
    // Adding event listener so when appropriate key is pressed the drums sound is made
    // Adding class of playing when key is pressed for visual appearance
    //

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

    //
    // Added event listener so when CSS transition on visual appearance ends
    // playing class will be removed
    //

    const keys = document.querySelectorAll(".key")

    // adding an event listener to each key to remove class of playing after transition ends
    keys.forEach(key => key.addEventListener('transitionend', removeClass));
    
    //
    // ** drumless tracks section **
    //
    
    const TRACKS = [
        ['track1', 'Track 1'],
        ['track2', 'Track 2'],
        ['track3', 'Track 3'],
        ['track4', 'Track 4']
    ];

    TRACKS.forEach((track, i) => {
        // creating buttons with attributes and appending to correct HTML ele
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
        let btnContainer = document.createElement('div')
        btnContainer.classList.add("music");
        btnContainer.append(button1)
        btnContainer.append(button2)
        trackNav.append(btnContainer);
        // creating audio tags with attributes and appending to correct HTML ele
        const audioDiv = document.getElementById("audio-tags");
        let audio = document.createElement("audio")
        audio.setAttribute("loop", "true")
        let src = "./drum_simulator/sounds/" + track[0] + ".wav";
        audio.src = src;
        audio.dataset.song = track[0];
        audio.classList.add("track")
        audio.id = `t${i + 1}`; 
        audioDiv.append(audio);
    })

    //
    // Added event listeners so when button is pressed track is played/stopped
    // Added logic to change inner Text on button between Play/Pause
    //

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

    //
    // Adjusting volume
    //

    function changeVolume(e) {
        const newVol = e.target.value;
        const audios = document.querySelectorAll('audio');
        audios.forEach(audio => audio.volume = newVol);
    }

    const volume = document.getElementById('volume');
    volume.addEventListener('input', changeVolume)
    
    //
    // Pop up of 'Coming Soon' for RECORD and MEMORY GAME
    //

    const soon = document.querySelectorAll('.soon')
    const popupContainer = document.getElementById('popup-container')
    const close = document.getElementById('close')

    soon.forEach(el => {
        el.addEventListener('click', () => {
            popupContainer.classList.add('show');
        })
    })

    close.addEventListener('click', () => {
        popupContainer.classList.remove('show');
    })

    //
    // About button pop up
    //

    const about = document.getElementById('about-btn')
    const aboutClose = document.getElementById('about-close')
    const aboutPopup = document.getElementById('about-popup-container') 

    about.addEventListener('click', () => {
      aboutPopup.classList.add('show');
    })

    aboutClose.addEventListener('click', () => {
        aboutPopup.classList.remove('show');
    })

    //
    // Jim keydown gif
    //

    const jimClose = document.getElementById('jim-close')
    const keyCont = document.querySelector('.keydown-container')
    
    jimClose.addEventListener('click', () => {
        keyCont.classList.add('hide');
    })
    

    //
    // landing page stuff
    //

    const jam = document.getElementById('jam')
    jam.addEventListener('click', function(e) {
        document.getElementById('about-container').classList.add('bye');
    })
    
    //
    // Animation on canvas with keydown events
    //

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // FIX BELOW TO SHOW TEXT

    // const SOUNDS = [
    //     ["KeyA", "COWBELL"],
    //     ["KeyS", "HIHAT"],
    //     ["KeyD", "KICK"],
    //     ["KeyF", "OPENHIHAT"],
    //     ["KeyJ", "SNARE"],
    //     ["KeyK", "TOM"],
    //     ["KeyL", "RIDE"],
    //     ["Semicolon", "CRASH"],
    // ]
    
    // function addText(e) {
    //     SOUNDS.forEach(pair => {
    //         if (e.code === pair[0]) {
                
                
    //         }
    //     })
    // }
    // console.log(SOUNDS[3][1]);
    

    // window.addEventListener('keydown', function(e) {
    //     if (e.code === "KeyF") {
    //         ctx.fillStyle = "white";
    //         ctx.font = "bold 60px Arial";
    //         ctx.fillText("SOUNDS[3][1]", 500, 500);
    //     }
    // }

    const COLORS = [
        'red', 'blue', 'green', 'white', 'yellow', 
        'purple', 'orange', 'gray', 'pink', 'lightblue', 
        'navy', 'maroon', 'teal', 'cyan', 'olive', 
        'silver', 'brown', 'slategray' , 'honeydew', 'violet', 
        'antique ruby', 'blue-green', 'byzantine', 'cark orchid' 
    ]

    class Balloon {
        constructor() {
            this.x = Math.round(Math.random() * 1450);
            this.y = Math.round(Math.random() * 800);
            this.size = Math.round(Math.random() * 50); // sets radius between 0 & 50
            this.velX = Math.random() * 4 - 2; 
            this.velY = Math.random() * 4 - 2;
            this.color = COLORS[Math.floor(Math.random() * COLORS.length - 1)];
        }

        // updates random x, y position each time we call animate in loop
        update() {
            this.x += this.velX;
            this.y += this.velY;
            if (this.size > 0.2) this.size -= 0.1
        }

        // draws a new balloon
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }
    }

    function animate(balloon1, balloon2, balloon3) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        balloon1.update();
        balloon1.draw();
        balloon2.update();
        balloon2.draw();
        balloon3.update();
        balloon3.draw();
        requestAnimationFrame(() => { animate(balloon1, balloon2, balloon3) });
    }

    document.addEventListener('keydown', function(e) {
        let balloons = [];
        for (let i = 0; i < 3; i++) {
            balloons.push(new Balloon());
        }
        animate(...balloons) 
    })
    
    //
    // Easter Egg gifs
    //

    const IMAGES = [
        ['KeyG', 'whiplash'],
        ['KeyH', 'will'],
        ['Space', 'monkey']
    ]     

    window.addEventListener('keydown', function(e) {
        IMAGES.forEach((img) => {
            if (e.code === img[0]) {
                document.getElementById(`${img[1]}`).classList.add('show');
            }
        })
    })

    const will = document.getElementById('cwill')
    const whiplash = document.getElementById('cwhiplash')
    const monkey = document.getElementById('cmonkey')

    will.addEventListener('click', function(e) {
        document.getElementById('will').classList.remove('show');
    })

    whiplash.addEventListener('click', function (e) {
        document.getElementById('whiplash').classList.remove('show');
    })

    monkey.addEventListener('click', function(e) {
        document.getElementById('monkey').classList.remove('show');
    })
});