import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyEventFormComponent } from './modify-event-form.component';

describe('ModifyEventFormComponent', () => {
  let component: ModifyEventFormComponent;
  let fixture: ComponentFixture<ModifyEventFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyEventFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
