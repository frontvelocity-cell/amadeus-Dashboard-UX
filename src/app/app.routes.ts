import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { SearchEmployeesComponent } from './components/search-employees/search-employees.component';
import { ManagersComponent } from './components/managers/managers.component';
import { FlightAssignmentsComponent } from './components/flight-assignments/flight-assignments.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// Merged Angular routing configuration
// Combined both route configurations, removed duplicate imports and routes
// Maintained hierarchical structure with employees sub-routes
// Preserved proper route order with wildcard route at the end
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