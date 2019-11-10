import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarFilmesComponent } from './alterar-filmes.component';

describe('AlterarFilmesComponent', () => {
  let component: AlterarFilmesComponent;
  let fixture: ComponentFixture<AlterarFilmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarFilmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
