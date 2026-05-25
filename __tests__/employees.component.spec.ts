import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeesComponent } from '../src/app/components/employees/employees.component';

describe('EmployeesComponent', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, EmployeesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have employees data', () => {
    expect(component.employees).toBeDefined();
    expect(component.employees.length).toBeGreaterThan(0);
  });

  it('should render employee table', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('table')).toBeTruthy();
    expect(compiled.querySelector('thead')).toBeTruthy();
    expect(compiled.querySelector('tbody')).toBeTruthy();
  });

  it('should display Add Employee button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const addButton = compiled.querySelector('a[routerLink="/employees/add"]');
    expect(addButton).toBeTruthy();
    expect(addButton?.textContent?.trim()).toBe('Add Employee');
  });
});