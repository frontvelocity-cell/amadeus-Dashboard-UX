```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // Merged: Retained currentYear from both versions
  currentYear = new Date().getFullYear();
  
  // Merged: Added version property from second version
  version = '1.0';
}
```