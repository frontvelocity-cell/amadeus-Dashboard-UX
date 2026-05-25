```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardComponent } from '../src/app/components/dashboard/dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Merged: Added RouterTestingModule for routing functionality
      imports: [RouterTestingModule, DashboardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Common test: Component creation
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Merged: Consolidated title property test
  it('should have title "Dashboard"', () => {
    expect(component.title).toBe('Dashboard');
  });

  // Merged: Unified title rendering test (handles both h1 and h2 selectors)
  it('should render title in template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const titleElement = compiled.querySelector('h1, h2');
    expect(titleElement?.textContent).toContain('Dashboard');
  });

  // Enhanced: Dashboard cards test with flexible selector
  it('should render dashboard cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.bg-blue-50, .bg-green-50, .bg-purple-50, .card, .dashboard-card');
    expect(cards.length).toBeGreaterThanOrEqual(3);
  });

  // Data properties tests
  it('should display welcome message', () => {
    expect(component.welcomeMessage).toBe('Welcome back, Alex! 👋');
  });

  it('should have stats data', () => {
    expect(component.stats).toBeDefined();
    expect(component.stats.length).toBe(4);
  });

  it('should have recent flight assignments', () => {
    expect(component.recentFlightAssignments).toBeDefined();
    expect(component.recentFlightAssignments.length).toBeGreaterThan(0);
  });

  it('should have recent employees', () => {
    expect(component.recentEmployees).toBeDefined();
    expect(component.recentEmployees.length).toBeGreaterThan(0);
  });

  it('should have quick actions', () => {
    expect(component.quickActions).toBeDefined();
    expect(component.quickActions.length).toBeGreaterThan(0);
  });
});
```