import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuItem {
  icon: string;
  label: string;
  route?: string;
  active?: boolean;
  children?: MenuItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  // Merged menu items with both routing and active state support
  menuItems: MenuItem[] = [
    {
      icon: 'home',
      label: 'Dashboard',
      route: '/dashboard',
      active: true
    },
    {
      icon: 'group',
      label: 'Employee Management',
      route: '/employees',
      children: [
        { icon: '', label: 'Employees', route: '/employees' },
        { icon: '', label: 'Add Employee', route: '/employees/add' },
        { icon: '', label: 'Search Employees', route: '/employees/search' }
      ]
    },
    {
      icon: 'work',
      label: 'Manager Management',
      route: '/managers'
    },
    {
      icon: 'flight',
      label: 'Flight Management',
      route: '/flight-assignments'
    },
    {
      icon: 'admin',
      label: 'Administration',
      route: '/administration'
    }
  ];

  // Enhanced functionality for collapsible menu items
  expandedItems: Set<string> = new Set(['Employee Management']);

  toggleExpanded(label: string) {
    if (this.expandedItems.has(label)) {
      this.expandedItems.delete(label);
    } else {
      this.expandedItems.add(label);
    }
  }

  isExpanded(label: string): boolean {
    return this.expandedItems.has(label);
  }
}