import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionIndexadaScreenComponent } from './asignacion-indexada-screen.component';

describe('AsignacionIndexadaScreenComponent', () => {
  let component: AsignacionIndexadaScreenComponent;
  let fixture: ComponentFixture<AsignacionIndexadaScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignacionIndexadaScreenComponent]
    });
    fixture = TestBed.createComponent(AsignacionIndexadaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
