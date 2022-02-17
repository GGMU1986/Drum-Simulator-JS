import { setUpSounds } from './sounds';
import { setUpTracks } from './tracks';
import { adjustVolume } from './volume';
import { comingSoon } from './coming_soon';
import { about } from './about';
import { createBallons } from './balloons';
import { hiddenGifs } from './hidden_gifs';
import { keySoundStyle } from './key_sound_style';
 
document.addEventListener("DOMContentLoaded", () => {
    
  setUpSounds();
  keySoundStyle();
  setUpTracks();
  adjustVolume();
  comingSoon();
  about();
  createBallons();
  hiddenGifs();

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
});