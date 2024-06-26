import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2ComponentComponent } from './module2-component.component';

describe('Module2ComponentComponent', () => {
  let component: Module2ComponentComponent;
  let fixture: ComponentFixture<Module2ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Module2ComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
