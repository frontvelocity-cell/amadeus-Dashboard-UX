import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Employee {
  id: string;
  name: string;
  designation: string;
  department: string;
}

@Component({
  selector: 'app-recent-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-employees.component.html',
  styleUrls: ['./recent-employees.component.css']
})
export class RecentEmployeesComponent {
  employees: Employee[] = [
    {
      id: 'E1001',
      name: 'Sarah Johnson',
      designation: 'Senior Analyst',
      department: 'Operations'
    },
    {
      id: 'E1002',
      name: 'Michael Chen',
      designation: 'Flight Coordinator',
      department: 'Operations'
    },
    {
      id: 'E1003',
      name: 'Priya Sharma',
      designation: 'Data Analyst',
      department: 'Planning'
    },
    {
      id: 'E1004',
      name: 'David Wilson',
      designation: 'Pilot',
      department: 'Flight Ops'
    },
    {
      id: 'E1005',
      name: 'Emily Davis',
      designation: 'Scheduler',
      department: 'Operations'
    }
  ];
}