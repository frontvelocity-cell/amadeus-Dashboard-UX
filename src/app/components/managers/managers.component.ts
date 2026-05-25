import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-managers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css']
})
export class ManagersComponent {
  managers = [
    { id: 'M1001', name: 'Robert Anderson', department: 'Operations', team: 'Flight Operations', employees: 12 },
    { id: 'M1002', name: 'Lisa Parker', department: 'Planning', team: 'Strategic Planning', employees: 8 },
    { id: 'M1003', name: 'James Wilson', department: 'Flight Ops', team: 'Pilot Management', employees: 15 },
    { id: 'M1004', name: 'Maria Garcia', department: 'Administration', team: 'HR & Admin', employees: 6 }
  ];
}