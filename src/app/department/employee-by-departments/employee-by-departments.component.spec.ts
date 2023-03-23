import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeByDepartmentsComponent } from './employee-by-departments.component';

describe('EmployeeByDepartmentsComponent', () => {
  let component: EmployeeByDepartmentsComponent;
  let fixture: ComponentFixture<EmployeeByDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeByDepartmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeByDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
