import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  employees = [
    { id: 'E1001', name: 'Sarah Johnson', designation: 'Senior Analyst', department: 'Operations', status: 'Active' },
    { id: 'E1002', name: 'Michael Chen', designation: 'Flight Coordinator', department: 'Operations', status: 'Active' },
    { id: 'E1003', name: 'Priya Sharma', designation: 'Data Analyst', department: 'Planning', status: 'Active' },
    { id: 'E1004', name: 'David Wilson', designation: 'Pilot', department: 'Flight Ops', status: 'Active' },
    { id: 'E1005', name: 'Emily Davis', designation: 'Scheduler', department: 'Operations', status: 'Inactive' }
  ];
}