import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-flight-assignments',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './flight-assignments.component.html',
  styleUrls: ['./flight-assignments.component.css']
})
export class FlightAssignmentsComponent {
  flightAssignments = [
    {
      id: 'FA001',
      flightCode: 'FL1234',
      employee: 'Sarah Johnson',
      route: 'DEL → BOM',
      travelDate: '20 May 2026',
      status: 'Confirmed',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 'FA002',
      flightCode: 'FL5678',
      employee: 'Michael Chen',
      route: 'BOM → BLR',
      travelDate: '21 May 2026',
      status: 'Confirmed',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 'FA003',
      flightCode: 'FL9012',
      employee: 'Priya Sharma',
      route: 'DEL → HYD',
      travelDate: '22 May 2026',
      status: 'Confirmed',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 'FA004',
      flightCode: 'FL3456',
      employee: 'David Wilson',
      route: 'BLR → MAA',
      travelDate: '23 May 2026',
      status: 'Confirmed',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 'FA005',
      flightCode: 'FL7890',
      employee: 'Emily Davis',
      route: 'BOM → DEL',
      travelDate: '24 May 2026',
      status: 'Scheduled',
      statusColor: 'bg-blue-100 text-blue-800'
    }
  ];
}