# Drum-Simulator-JS

  ### Overview:

The [Drum Simulator](https://ggmu1986.github.io/Drum-Simulator-JS/) will allow the user to play drum sounds by pressing keys on the keyboard. Each key (only 8 keys) will correspond to a specific drum or cymbal in a standard drumset. The simulator will have the following pieces to be played by keys:
  1) Snare Drum
  2) Hi-Hat
  3) Open Hi-Hat
  4) Floor Tom
  5) Kick Drum
  6) Crash Cymbal
  7) Ride Cymbal
  8) Cowbell

<img src="https://user-images.githubusercontent.com/8636103/144727610-23570fe9-6704-4c75-96aa-4fb4118a4640.jpeg" width="600" height="400" /><img src="https://user-images.githubusercontent.com/8636103/144727847-96a8b869-c591-4bd4-a468-814acd6bd488.jpg" width="200" height="200" />

  ### FUNCTIONALITY & MVPs:

 With this Drum Simulator, users will be able to:

  - Read through an About modal to explain functionality. 
  - Press keys on keyboard and play drum/cymbal sounds in a free-style mode.
  - Add percussion to preloaded drumless tracks.
  - Have Balloons created with each key down that float off in random directions for a visual effect.
  - Play an interactive game, in which, the user will need to remember a pattern of drum sounds and play them back in correct order. (Bonus)
  - Record pieces of music they created to listen to them later. (Bonus)
 
  <img src="https://user-images.githubusercontent.com/8636103/144729665-619d767f-8337-4302-b310-485a5ec99a67.gif" width="800" height="500" />
  
  ### HIGHLIGHTS:
  
  The setting up of audio tags holding the drum sound source and adding event listeners for the the keydown of the key for the specific sounds.
  
  ```js script
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
        let src = "./drum_simulator/sounds/" + pair[1] + ".wav";
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
   ```
   
   The animation of the balloons provides a visual effect for the user.
   
```js script
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
```
    

  
<!--   In addition, this project will include:
  
   - An ABOUT modal describing how to interact with the simulator.
   - A production README. -->
   
   
<!--    **WIREFRAMES**
   
  <img width="900"  src="https://user-images.githubusercontent.com/8636103/144728495-55bad54f-9c6a-4cb2-aea4-d7ee10eb8814.png">
   
   - Nav Links will include links to this project's Github repo, developer's LinkedIn and the About modal.
   - Other functionality nav bar allows user to click buttons to start playing memory game and record pieces of music.
   - Labelled keys on the bottom of screen inform user which piece of drum set it corresponds to. -->
   
   
   ### TECHNOLOGIES, LIBRARIES, APIs:
   
   This Project will be implmented with the following technologies:
   
   - The Web Audio API 
   - Canvas API 
   - Webpack to bundle the source JavaScript code.
   - npm to manage dependencies.
   - Font Awesome
   - Google Fonts
   
   
   
<!--    **IMPLEMENTED TIMEFRAMES**:

  - **Friday Afternoon & Weekend**: Setup project, including getting webpack started. Reasearch Music/Audio APIs and Canvas on how to implement ideas. Start       writing the code to link sounds of drum/cymabls to correspond to pressing the correct keys on keyboard.

  - **Monday**: Finish up writing code for getting keys to make correct sounds and event listeners/handlers for when keys are pressed/unpressed so sounds are       heard correctly. Start styling keys/viewport with CSS.

  - **Tuesday**: Start working with Canvas API to write code to get pixelated character on screen to correspond to correct keys being played. 

  - **Wednesday**: Finish up code and CSS styling for pixelated character. If time permits start working on memory game/recording (bonus) features.

  - **Thursday Morning**: Review code and make small updates as needed. Deploy to GitHub pages.

 
  **BONUS FEATURES**:

  - Memory Game: user will try to re-enter random keys in correct order after hearing them once.

  - Recording feature: user will have the option to record any music played in freestyle mode.  -->
  
