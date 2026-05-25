import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-employees',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-employees.component.html',
  styleUrls: ['./search-employees.component.css']
})
export class SearchEmployeesComponent {
  searchQuery = '';
  searchResults: any[] = [];
  isSearching = false;

  allEmployees = [
    { id: 'E1001', name: 'Sarah Johnson', designation: 'Senior Analyst', department: 'Operations', status: 'Active' },
    { id: 'E1002', name: 'Michael Chen', designation: 'Flight Coordinator', department: 'Operations', status: 'Active' },
    { id: 'E1003', name: 'Priya Sharma', designation: 'Data Analyst', department: 'Planning', status: 'Active' },
    { id: 'E1004', name: 'David Wilson', designation: 'Pilot', department: 'Flight Ops', status: 'Active' },
    { id: 'E1005', name: 'Emily Davis', designation: 'Scheduler', department: 'Operations', status: 'Inactive' }
  ];

  onSearch() {
    if (!this.searchQuery.trim()) {
      this.searchResults = [];
      return;
    }

    this.isSearching = true;
    
    // Simulate API call
    setTimeout(() => {
      this.searchResults = this.allEmployees.filter(employee => 
        employee.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        employee.id.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        employee.designation.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        employee.department.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      this.isSearching = false;
    }, 500);
  }

  clearSearch() {
    this.searchQuery = '';
    this.searchResults = [];
  }
}