

// Creating audio tags and giving them the drum sound source 


export const setUpSounds = () => {

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
    
    // .mp3 files
    const SOUNDS2 = [
      ["KeyE", "kawhi"],
      ["KeyR", "cartoon-jump"],
      ["KeyI", "gangsta-paradise"],
      ["KeyO", "batman"],
      ["KeyC", "wizard"],
      ["KeyN", "MK"],
      ["KeyW", "dj"],
      ["KeyU", "arnold"],
      ["KeyV", "mario"]
    ]

    SOUNDS.forEach(pair => {
        let audio = document.createElement("audio");
        const audioDiv = document.getElementById("audio-tags");
        audioDiv.append(audio);
        let src = "./sounds/" + pair[1] + ".wav";
        audio.src = src;
        audio.dataset.key = `${pair[0]}`;
    })
    
    SOUNDS2.forEach(pair => {
        let audio = document.createElement("audio");
        const audioDiv = document.getElementById("audio-tags");
        audioDiv.append(audio);
        let src = "./sounds/" + pair[1] + ".mp3";
        audio.src = src;
        audio.dataset.key = `${pair[0]}`;
    })

};

