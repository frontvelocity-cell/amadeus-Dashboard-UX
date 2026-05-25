```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeroRowComponent } from '../hero-row/hero-row.component';
import { StatsComponent } from '../stats/stats.component';
import { RecentFlightsComponent } from '../recent-flights/recent-flights.component';
import { RecentEmployeesComponent } from '../recent-employees/recent-employees.component';
import { QuickActionsComponent } from '../quick-actions/quick-actions.component';
import { FooterComponent } from '../footer/footer.component';

// Interface definitions for type safety
interface StatCard {
  icon: string;
  number: string;
  title: string;
  caption: string;
  color: string;
  bgColor: string;
}

interface FlightAssignment {
  flightCode: string;
  employee: string;
  route: string;
  travelDate: string;
  status: string;
  statusColor: string;
}

interface Employee {
  id: string;
  name: string;
  designation: string;
  department: string;
}

interface QuickAction {
  icon: string;
  label: string;
  route: string;
  color: string;
  bgColor: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SidebarComponent,
    HeroRowComponent,
    StatsComponent,
    RecentFlightsComponent,
    RecentEmployeesComponent,
    QuickActionsComponent,
    FooterComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // Dashboard metadata
  title = 'Dashboard';
  welcomeMessage = 'Welcome back, Alex! 👋';
  subtitle = 'Here\'s what\'s happening in the system today.';
  userRole = 'Administrator';

  // Statistics data for dashboard cards
  stats: StatCard[] = [
    {
      icon: 'group',
      number: '128',
      title: 'Employees',
      caption: 'Total employees in the system',
      color: 'text-blue-900',
      bgColor: 'bg-blue-50'
    },
    {
      icon: 'work',
      number: '18',
      title: 'Managers',
      caption: 'Total managers in the system',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: 'flight',
      number: '245',
      title: 'Flight Assignments',
      caption: 'Total flight assignments',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: 'calendar',
      number: '32',
      title: 'Upcoming Flights',
      caption: 'In next 7 days',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  // Recent flight assignments data
  recentFlightAssignments: FlightAssignment[] = [
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

  // Recent employees data
  recentEmployees: Employee[] = [
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

  // Quick actions for dashboard navigation
  quickActions: QuickAction[] = [
    {
      icon: 'person_add',
      label: 'Add Employee',
      route: '/employees/add',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: 'work_add',
      label: 'Add Manager',
      route: '/managers/add',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: 'flight_add',
      label: 'Add Flight Assignment',
      route: '/flight-assignments/add',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: 'search',
      label: 'Search Records',
      route: '/employees/search',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: 'report',
      label: 'Generate Report',
      route: '/reports',
      color: 'text-blue-600',
      bgColor: 'bg-white border'
    }
  ];
}
```