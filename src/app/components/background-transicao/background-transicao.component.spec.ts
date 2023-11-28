import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundTransicaoComponent } from './background-transicao.component';

describe('BackgroundTransicaoComponent', () => {
  let component: BackgroundTransicaoComponent;
  let fixture: ComponentFixture<BackgroundTransicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundTransicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundTransicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
