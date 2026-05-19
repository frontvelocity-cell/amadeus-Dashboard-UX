import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FlightAssignment {
  flightCode: string;
  employee: string;
  route: string;
  travelDate: string;
  status: string;
  statusColor: string;
}

@Component({
  selector: 'app-recent-flights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-flights.component.html',
  styleUrls: ['./recent-flights.component.css']
})
export class RecentFlightsComponent {
  flightAssignments: FlightAssignment[] = [
    {
      flightCode: 'FL1234',
      employee: 'Sarah Johnson',
      route: 'DEL → BOM',
      travelDate: '20 May 2026',
      status: 'Confirmed',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      flightCode: 'FL5678',
      employee: 'Michael Chen',
      route: 'BOM → BLR',
      travelDate: '21 May 2026',
      status: 'Confirmed',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      flightCode: 'FL9012',
      employee: 'Priya Sharma',
      route: 'DEL → HYD',
      travelDate: '22 May 2026',
      status: 'Confirmed',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      flightCode: 'FL3456',
      employee: 'David Wilson',
      route: 'BLR → MAA',
      travelDate: '23 May 2026',
      status: 'Confirmed',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      flightCode: 'FL7890',
      employee: 'Emily Davis',
      route: 'BOM → DEL',
      travelDate: '24 May 2026',
      status: 'Scheduled',
      statusColor: 'bg-blue-100 text-blue-800'
    }
  ];
}