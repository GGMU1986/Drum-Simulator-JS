

export const comingSoon = () => {

  const soon = document.querySelectorAll('.soon')
  const popupContainer = document.getElementById('popup-container')
  const close = document.getElementById('close')

  soon.forEach(el => {
      el.addEventListener('click', () => {
          popupContainer.classList.add('show');
      })
  });

  close.addEventListener('click', () => {
      popupContainer.classList.remove('show');
  });
};