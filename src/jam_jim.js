
// landing page jam btn
export const startJamming = () => {
  
  const jam = document.getElementById('jam')
  jam.addEventListener('click', function(e) {
      document.getElementById('about-container').classList.add('bye');
  }) 
};

// Jim keydown gif
export const jimGif = () => {
  
  const jimClose = document.getElementById('jim-close')
  const keyCont = document.querySelector('.keydown-container')
  
  jimClose.addEventListener('click', () => {
    keyCont.classList.add('hide');
  })
};