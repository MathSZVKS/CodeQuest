import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/game/game.component';
import { TimerComponent } from './components/timer/timer.component';
import { IcebergComponent } from './components/iceberg/iceberg.component';
import { ModalPerguntasComponent } from './components/modal-perguntas/modal-perguntas.component';
import { InfosJogadorComponent } from './components/infos-jogador/infos-jogador.component';
import { OpcoesComponent } from './pages/opcoes/opcoes.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { CreditosComponent } from './pages/creditos/creditos.component';
import { BackgroundTransicaoComponent } from './components/background-transicao/background-transicao.component';
import { UserComponent } from './pages/user/user.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, GameComponent, TimerComponent, IcebergComponent, ModalPerguntasComponent, InfosJogadorComponent, OpcoesComponent, LoadingScreenComponent, CreditosComponent, BackgroundTransicaoComponent, UserComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
