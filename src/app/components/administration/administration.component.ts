import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-administration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent {
  systemStats = {
    totalUsers: 146,
    activeUsers: 142,
    systemUptime: '99.8%',
    lastBackup: '2 hours ago'
  };

  recentActivities = [
    { user: 'Alex Thompson', action: 'Added new employee', time: '5 minutes ago' },
    { user: 'Sarah Johnson', action: 'Updated flight assignment', time: '15 minutes ago' },
    { user: 'Michael Chen', action: 'Generated monthly report', time: '1 hour ago' },
    { user: 'Priya Sharma', action: 'Modified employee record', time: '2 hours ago' }
  ];

  systemSettings = [
    { name: 'Email Notifications', enabled: true },
    { name: 'Auto Backup', enabled: true },
    { name: 'Maintenance Mode', enabled: false },
    { name: 'Debug Logging', enabled: false }
  ];

  toggleSetting(setting: any) {
    setting.enabled = !setting.enabled;
  }
}