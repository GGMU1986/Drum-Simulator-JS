import { setUpSounds } from './sounds';
import { setUpTracks } from './tracks';
import { adjustVolume } from './volume';
import { comingSoon } from './coming_soon';
import { about } from './about';
import { createBallons } from './balloons';
import { hiddenGifs } from './hidden_gifs';
 
document.addEventListener("DOMContentLoaded", () => {
    
    //
    // Creating audio tags and giving them the drum sound source 
    //

    setUpSounds();
    

    //
    // Adding event listener so when appropriate key is pressed the drums sound is made
    // Adding class of playing when key is pressed for visual appearance
    //

    // **********************
    // BELOW MAY BE CAUSING ERROR IN CONSOLE
    // **********************

    window.addEventListener('keydown', (e) => {
        const audio = document.querySelector(`audio[data-key="${e.code}"]`)
        const key = document.querySelector(`.key[data-key="${e.code}"]`)
        if (audio){
          audio.currentTime = 0; // web audio API method that rewinds audio file to beginning on each keydown
          audio.play();
          if (key){
            key.classList.add('playing')
          }
        }
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

    // *********************
    // JS Event bubbling may just be able to add event listener to keys for better performance
    // ********************* 
    
    keys.forEach(key => key.addEventListener('transitionend', removeClass));
    
    //
    // drumless tracks section
    //
    
    setUpTracks();
    
    //
    // Adjusting volume
    //
    
    adjustVolume();
    
    //
    // Pop up of 'Coming Soon' for RECORD and MEMORY GAME
    //

    comingSoon();

    //
    // About button pop up
    //

    about();

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

    createBallons();
    
    //
    // Easter Egg gifs
    //

    hiddenGifs();
    
});