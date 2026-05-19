import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StatCard {
  title: string;
  value: string;
  description: string;
  iconBg: string;
  textColor: string;
  icon: string;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
  stats: StatCard[] = [
    {
      title: 'Employees',
      value: '128',
      description: 'Total employees in the system',
      iconBg: 'bg-blue-50',
      textColor: 'text-blue-900',
      icon: 'group'
    },
    {
      title: 'Managers',
      value: '18',
      description: 'Total managers in the system',
      iconBg: 'bg-green-50',
      textColor: 'text-green-600',
      icon: 'work'
    },
    {
      title: 'Flight Assignments',
      value: '245',
      description: 'Total flight assignments',
      iconBg: 'bg-blue-50',
      textColor: 'text-blue-600',
      icon: 'flight'
    },
    {
      title: 'Upcoming Flights',
      value: '32',
      description: 'In next 7 days',
      iconBg: 'bg-orange-50',
      textColor: 'text-orange-600',
      icon: 'calendar'
    }
  ];
}