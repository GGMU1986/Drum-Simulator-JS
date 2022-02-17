
 
// Adding event listener so when appropriate key is pressed the drums sound is made
// Adding class of playing when key is pressed for visual appearance
  

export const keySoundStyle = () => {

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
};