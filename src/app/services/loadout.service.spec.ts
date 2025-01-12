import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http'; // Import provideHttpClient
import { LoadoutService } from './loadout.service';

describe('LoadoutService', () => {
  let service: LoadoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoadoutService, // Provide the service
        provideHttpClient(), // Provide HttpClient testing
      ],
    });
    service = TestBed.inject(LoadoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Example test for mocking HTTP requests
  // Add more specific tests here based on your service functionality
});
