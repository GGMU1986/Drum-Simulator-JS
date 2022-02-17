

export const about = () => {
  const about = document.getElementById('about-btn')
  const aboutClose = document.getElementById('about-close')
  const aboutPopup = document.getElementById('about-popup-container') 

  about.addEventListener('click', () => {
    aboutPopup.classList.add('show');
  })

  aboutClose.addEventListener('click', () => {
      aboutPopup.classList.remove('show');
  })
};