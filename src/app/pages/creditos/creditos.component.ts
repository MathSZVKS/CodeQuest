import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.scss']
})
export class CreditosComponent {

  constructor(private router: Router) {}

  redirecionar(pagina: string) {
    this.router.navigate([pagina]);
  }

  sair() {
    this.redirecionar('/home');
  }
  
}
