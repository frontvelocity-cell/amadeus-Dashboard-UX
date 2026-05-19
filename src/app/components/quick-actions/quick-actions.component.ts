import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface QuickAction {
  title: string;
  icon: string;
  bgColor: string;
  textColor: string;
}

@Component({
  selector: 'app-quick-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quick-actions.component.html',
  styleUrls: ['./quick-actions.component.css']
})
export class QuickActionsComponent {
  actions: QuickAction[] = [
    {
      title: 'Add Employee',
      icon: 'user-plus',
      bgColor: 'bg-blue-50 hover:bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      title: 'Add Manager',
      icon: 'briefcase-plus',
      bgColor: 'bg-green-50 hover:bg-green-100',
      textColor: 'text-green-600'
    },
    {
      title: 'Add Flight Assignment',
      icon: 'plane-plus',
      bgColor: 'bg-blue-50 hover:bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      title: 'Search Records',
      icon: 'search',
      bgColor: 'bg-green-50 hover:bg-green-100',
      textColor: 'text-green-600'
    },
    {
      title: 'Generate Report',
      icon: 'document',
      bgColor: 'bg-white hover:bg-gray-50 border border-gray-200',
      textColor: 'text-blue-600'
    }
  ];
}