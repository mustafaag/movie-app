import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoBindingsComponent } from './two-bindings.component';

describe('TwoBindingsComponent', () => {
  let component: TwoBindingsComponent;
  let fixture: ComponentFixture<TwoBindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoBindingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
