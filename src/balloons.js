
 
// Animation on canvas with keydown events
    
export const createBallons = () => {

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const COLORS = [
      'red', 'blue', 'green', 'white', 'yellow', 
      'purple', 'orange', 'gray', 'pink', 'lightblue', 
      'navy', 'maroon', 'teal', 'cyan', 'olive', 
      'silver', 'brown', 'slategray' , 'honeydew', 'violet', 
      'antique ruby', 'blue-green', 'byzantine', 'cark orchid' 
    ];

    class Balloon {
        constructor() {
          this.x = Math.round(Math.random() * 1450);
          this.y = Math.round(Math.random() * 800);
          this.size = Math.round(Math.random() * 50); // sets radius between 0 & 50
          this.velX = Math.random() * 4 - 2; 
          this.velY = Math.random() * 4 - 2;
          this.color = COLORS[Math.floor(Math.random() * COLORS.length - 1)];
        }

        // updates random x, y position each time we call animate in loop
        update() {
            this.x += this.velX;
            this.y += this.velY;
            if (this.size > 0.2) this.size -= 0.1
        }

        // draws a new balloon
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }
    }

    function animate(balloon1, balloon2, balloon3) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        balloon1.update();
        balloon1.draw();
        balloon2.update();
        balloon2.draw();
        balloon3.update();
        balloon3.draw();
        requestAnimationFrame(() => { animate(balloon1, balloon2, balloon3) });
    }

    document.addEventListener('keydown', function(e) {
        let balloons = [];
        for (let i = 0; i < 3; i++) {
            balloons.push(new Balloon());
        }
        animate(...balloons) 
    })
};