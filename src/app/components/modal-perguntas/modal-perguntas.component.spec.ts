import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPerguntasComponent } from './modal-perguntas.component';

describe('ModalPerguntasComponent', () => {
  let component: ModalPerguntasComponent;
  let fixture: ComponentFixture<ModalPerguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPerguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPerguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
