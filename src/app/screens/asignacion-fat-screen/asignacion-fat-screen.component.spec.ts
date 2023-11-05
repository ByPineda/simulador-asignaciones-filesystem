import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionFatScreenComponent } from './asignacion-fat-screen.component';

describe('AsignacionFatScreenComponent', () => {
  let component: AsignacionFatScreenComponent;
  let fixture: ComponentFixture<AsignacionFatScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignacionFatScreenComponent]
    });
    fixture = TestBed.createComponent(AsignacionFatScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
