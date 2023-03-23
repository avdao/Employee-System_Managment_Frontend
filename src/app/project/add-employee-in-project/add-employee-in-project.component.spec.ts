import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeInProjectComponent } from './add-employee-in-project.component';

describe('AddEmployeeInProjectComponent', () => {
  let component: AddEmployeeInProjectComponent;
  let fixture: ComponentFixture<AddEmployeeInProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeeInProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmployeeInProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
