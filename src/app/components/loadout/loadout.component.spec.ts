import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http'; // Import provideHttpClient
import { LoadoutComponent } from './loadout.component';
import { LoadoutService } from '../../services/loadout.service';

describe('LoadoutComponent', () => {
  let component: LoadoutComponent;
  let fixture: ComponentFixture<LoadoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadoutComponent], // Load the standalone component
      providers: [
        LoadoutService, // Provide the service
        provideHttpClient(), // Mock HttpClient in the test environment
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
