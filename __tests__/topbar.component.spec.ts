import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopbarComponent } from '../src/app/components/topbar/topbar.component';

describe('TopbarComponent', () => {
  let component: TopbarComponent;
  let fixture: ComponentFixture<TopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopbarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display profile name', () => {
    expect(component.profileName).toBe('Alex Thompson');
  });

  it('should display profile role', () => {
    expect(component.profileRole).toBe('Administrator');
  });
});