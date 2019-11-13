import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeublesListeComponent } from './meubles-liste.component';

describe('MeublesListeComponent', () => {
  let component: MeublesListeComponent;
  let fixture: ComponentFixture<MeublesListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeublesListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeublesListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
