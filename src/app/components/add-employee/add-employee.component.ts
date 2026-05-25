import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  employee = {
    name: '',
    email: '',
    designation: '',
    department: '',
    phone: '',
    address: ''
  };

  departments = ['Operations', 'Planning', 'Flight Ops', 'Administration'];
  designations = ['Analyst', 'Senior Analyst', 'Coordinator', 'Manager', 'Pilot', 'Scheduler'];

  onSubmit() {
    console.log('Adding employee:', this.employee);
    // Add logic to save employee
  }
}