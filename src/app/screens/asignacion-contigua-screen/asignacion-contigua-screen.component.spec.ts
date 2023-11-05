import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionContiguaScreenComponent } from './asignacion-contigua-screen.component';

describe('AsignacionContiguaScreenComponent', () => {
  let component: AsignacionContiguaScreenComponent;
  let fixture: ComponentFixture<AsignacionContiguaScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignacionContiguaScreenComponent]
    });
    fixture = TestBed.createComponent(AsignacionContiguaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
