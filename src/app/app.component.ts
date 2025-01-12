import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadoutComponent } from './components/loadout/loadout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoadoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'loadout-chaos';
}
