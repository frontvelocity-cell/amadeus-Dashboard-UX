import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { SearchEmployeesComponent } from './components/search-employees/search-employees.component';
import { ManagersComponent } from './components/managers/managers.component';
import { FlightAssignmentsComponent } from './components/flight-assignments/flight-assignments.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// Merged routing configuration - combined both versions and removed duplicate routes
// Added all unique routes from both configurations while maintaining proper order
export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees/add', component: AddEmployeeComponent },
  { path: 'employees/search', component: SearchEmployeesComponent },
  { path: 'managers', component: ManagersComponent },
  { path: 'flight-assignments', component: FlightAssignmentsComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: '**', component: NotFoundComponent }
];