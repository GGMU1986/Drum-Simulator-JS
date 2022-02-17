

// Easter Egg gifs

export const hiddenGifs = () => {
  const IMAGES = [
        ['KeyG', 'whiplash'],
        ['KeyH', 'will'],
        ['Space', 'monkey']
    ]     

    window.addEventListener('keydown', function(e) {
        IMAGES.forEach((img) => {
            if (e.code === img[0]) {
                document.getElementById(`${img[1]}`).classList.add('show');
            }
        })
    })

    const will = document.getElementById('cwill')
    const whiplash = document.getElementById('cwhiplash')
    const monkey = document.getElementById('cmonkey')

    will.addEventListener('click', function(e) {
        document.getElementById('will').classList.remove('show');
    })

    whiplash.addEventListener('click', function (e) {
        document.getElementById('whiplash').classList.remove('show');
    })

    monkey.addEventListener('click', function(e) {
        document.getElementById('monkey').classList.remove('show');
    })
};