import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-row.component.html',
  styleUrls: ['./hero-row.component.css']
})
export class HeroRowComponent {
  userName = 'Alex';
  userRole = 'Administrator';
}