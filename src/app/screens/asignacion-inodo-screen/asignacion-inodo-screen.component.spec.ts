import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionInodoScreenComponent } from './asignacion-inodo-screen.component';

describe('AsignacionInodoScreenComponent', () => {
  let component: AsignacionInodoScreenComponent;
  let fixture: ComponentFixture<AsignacionInodoScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignacionInodoScreenComponent]
    });
    fixture = TestBed.createComponent(AsignacionInodoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
