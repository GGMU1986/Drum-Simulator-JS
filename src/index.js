import { setUpSounds } from './sounds';
import { setUpTracks } from './tracks';
import { adjustVolume } from './volume';
import { comingSoon } from './coming_soon';
import { about } from './about';
import { createBallons } from './balloons';
import { hiddenGifs } from './hidden_gifs';
import { keySoundStyle } from './key_sound_style';
import { startJamming, jimGif } from './jam_jim'; 

document.addEventListener("DOMContentLoaded", () => {
    
  setUpSounds();
  keySoundStyle();
  setUpTracks();
  adjustVolume();
  comingSoon();
  about();
  createBallons();
  hiddenGifs();
  startJamming();
  jimGif();
 
});