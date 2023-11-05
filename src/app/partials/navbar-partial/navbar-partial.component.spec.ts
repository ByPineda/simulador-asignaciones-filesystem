import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPartialComponent } from './navbar-partial.component';

describe('NavbarPartialComponent', () => {
  let component: NavbarPartialComponent;
  let fixture: ComponentFixture<NavbarPartialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarPartialComponent]
    });
    fixture = TestBed.createComponent(NavbarPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
