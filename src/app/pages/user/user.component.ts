import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersaveService } from 'src/app/service/usuario/usersave.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  enteredUsername: string = '';
  vibrateUsernameInput: boolean = false;

  constructor(private usersaveService: UsersaveService,private router: Router) {}


  onEntrarClick() {
    const username = this.enteredUsername;

    if (username.trim() !== '') {
      this.usersaveService.setUsername(username);
      this.router.navigate(['/home']);
    } else {
      this.vibrateUsernameInput = true;

      // Remova a classe 'vibrate' após um curto intervalo para que a animação ocorra
      setTimeout(() => {
        this.vibrateUsernameInput = false;
      }, 500); // Ajuste conforme necessário para coincidir com a duração da animação
    }
  }

  
  isUsernameEmpty(): boolean {
    return !this.enteredUsername || this.enteredUsername.trim() === '';
  }
}
