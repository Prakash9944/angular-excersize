import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1ComponentComponent } from './module1-component.component';

describe('Module1ComponentComponent', () => {
  let component: Module1ComponentComponent;
  let fixture: ComponentFixture<Module1ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Module1ComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
