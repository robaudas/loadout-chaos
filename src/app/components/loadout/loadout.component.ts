import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for directives like *ngIf and *ngFor
import { LoadoutService } from '../../services/loadout.service';

@Component({
  selector: 'app-loadout',
  templateUrl: './loadout.component.html',
  styleUrls: ['./loadout.component.css'],
  standalone: true,
  imports: [
    CommonModule, // Make CommonModule available for this standalone component
  ],
  providers: [LoadoutService], // Provide the LoadoutService for this component
})
export class LoadoutComponent {
  loadout: any;

  constructor(private loadoutService: LoadoutService) {}

  ngOnInit(): void {
    this.generateLoadout();
  }

  generateLoadout(): void {
    this.loadoutService.getRandomLoadout().subscribe((loadout) => {
      this.loadout = loadout;
    });
  }
}
