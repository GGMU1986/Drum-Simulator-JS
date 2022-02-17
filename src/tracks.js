
export const setUpTracks = () => {
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
        let src = "./sounds/" + track[0] + ".wav";
        audio.src = src;
        audio.dataset.song = track[0];
        audio.classList.add("track")
        audio.id = `t${i + 1}`; 
        audioDiv.append(audio);
    })

    // Added event listeners so when button is pressed track is played/stopped
    // Added logic to change inner Text on button between Play/Pause
    
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
}