import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from 'src/app/service/audio/audio.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  playpause: boolean = false;
  nivel: number = 1;
  loading = true;
  emTransicao = false;
  acessoNegado = false;
  vidas = 5;
  win = false;
  pontuacao = 0;

  constructor(public audioService: AudioService, private router: Router) {}


  redirecionar(pagina: string) {
    this.router.navigate([pagina]);
  }

  ngOnInit(): void {
    this.audioService.play(2);
    this.audioService.pause(1);

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  alteraNivel(nivel: any) {
    this.nivel = nivel;
    this.emTransicao = true;
    this.pontuacao = this.pontuacao + 250;

    setTimeout(() => {
      this.emTransicao = false;
    }, 3000);

    if(this.nivel > 38) {
      this.win = true;
      setTimeout(() => {
        this.redirecionar('/home');
      }, 25000);
    }
  }

  errouAPergunta(errou: boolean) {
    this.acessoNegado = errou;
    this.emTransicao = false;
    this.vidas--;

    setTimeout(() => {
      this.acessoNegado = false;
    }, 3000);

    if (this.vidas == 0) {
      setTimeout(() => {
        this.redirecionar('/home');
      }, 3000);
    }
  }



}
