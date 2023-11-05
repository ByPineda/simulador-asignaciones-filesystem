import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionVinculadaScreenComponent } from './asignacion-vinculada-screen.component';

describe('AsignacionVinculadaScreenComponent', () => {
  let component: AsignacionVinculadaScreenComponent;
  let fixture: ComponentFixture<AsignacionVinculadaScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignacionVinculadaScreenComponent]
    });
    fixture = TestBed.createComponent(AsignacionVinculadaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
