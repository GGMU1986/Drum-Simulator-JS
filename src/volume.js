

export const adjustVolume = () => {
  
  function changeVolume(e) {
      const newVol = e.target.value;
      const audios = document.querySelectorAll('audio');
      audios.forEach(audio => audio.volume = newVol);
    }

    const volume = document.getElementById('volume');
    volume.addEventListener('input', changeVolume)
}