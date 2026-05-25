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
    RouterOutlet, // Present in both versions - enables routing
    TopbarComponent, // Present in both versions - top navigation
    SidebarComponent, // Added from second version - side navigation
    FooterComponent // Added from second version - footer layout
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flight-management-dashboard'; // Consistent descriptive title from both versions
}