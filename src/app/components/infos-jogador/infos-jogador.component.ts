import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UsersaveService } from 'src/app/service/usuario/usersave.service';

@Component({
  selector: 'app-infos-jogador',
  templateUrl: './infos-jogador.component.html',
  styleUrls: ['./infos-jogador.component.scss'],
})
export class InfosJogadorComponent {
  
  savedUsername: string | null;

  constructor(private router: Router, private usersaveService: UsersaveService) {
    this.savedUsername = this.usersaveService.getUsername();
  }
  
  @Input() vidas: number = 5;
  @Input() pontuacao: number = 5;

  redirecionar(pagina: string) {
    this.router.navigate([pagina]);
  }

  sair() {
    this.redirecionar('/home');
  }
}
