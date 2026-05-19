import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeroRowComponent } from '../hero-row/hero-row.component';
import { StatsComponent } from '../stats/stats.component';
import { RecentFlightsComponent } from '../recent-flights/recent-flights.component';
import { RecentEmployeesComponent } from '../recent-employees/recent-employees.component';
import { QuickActionsComponent } from '../quick-actions/quick-actions.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
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
export class DashboardComponent {}