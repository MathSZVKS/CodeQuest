import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent {
  timer: number = 10;

  ngOnInit() {
    setTimeout(() => {
      this.iniciarContador();
    }, 2000);
  }

  iniciarContador() {
    const intervalo = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        clearInterval(intervalo);
      }
    }, 1000);
  }
}
