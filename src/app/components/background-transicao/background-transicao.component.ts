import { Component } from '@angular/core';

@Component({
  selector: 'app-background-transicao',
  templateUrl: './background-transicao.component.html',
  styleUrls: ['./background-transicao.component.scss']
})
export class BackgroundTransicaoComponent {

  ngOnInit(): void {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;

    if (!canvas) {
      throw new Error("Canvas element not found");
    }

    const ctx = canvas.getContext('2d');

    if (!ctx) {
      throw new Error("Canvas context not found");
    }

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const texts = '0123456789'.split('');
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = new Array(columns).fill(1);

    function draw() {
      if(ctx) {
        ctx.fillStyle = 'rgba(0,0,0,0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ff99ff';

        for (let i = 0; i < drops.length; i++) {
          const text = texts[Math.floor(Math.random() * texts.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);

          if (drops[i] * fontSize > canvas.height || Math.random() > 0.95) {
            drops[i] = 0;
          }

          drops[i]++;
        }
      }
    }
    setInterval(draw, 33);
  }
}
