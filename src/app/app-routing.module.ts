import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/game/game.component';
import { CreditosComponent } from './pages/creditos/creditos.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'game', component: GameComponent },
  { path: 'creditos', component: CreditosComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





