import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosJogadorComponent } from './infos-jogador.component';

describe('InfosJogadorComponent', () => {
  let component: InfosJogadorComponent;
  let fixture: ComponentFixture<InfosJogadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosJogadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfosJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
