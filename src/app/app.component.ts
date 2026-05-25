import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, // Added for common Angular directives and pipes
    RouterOutlet, // Enables routing functionality
    TopbarComponent, // Top navigation component
    SidebarComponent, // Side navigation component
    FooterComponent // Footer layout component
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flight-management-dashboard'; // Merged with more descriptive title
}