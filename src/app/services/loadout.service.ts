import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoadoutService {
  private jsonUrl = '/data/loadout-data.json';

  constructor(private http: HttpClient) {}

  getRandomLoadout(): Observable<any> {
    return this.http.get<any>(this.jsonUrl).pipe(
      map((data) => {
        return {
          primaryWeapon: this.getRandomItem(data.weapons.primary),
          secondaryWeapon: this.getRandomItem(data.weapons.secondary),
          throwable: this.getRandomItem(data.weapons.throwable),
          helmet: this.getRandomItem(data.equipment.helmets),
          armor: this.getRandomItem(data.equipment.armor),
          cape: this.getRandomItem(data.equipment.capes),
          stratagems: [
            this.getRandomItem(data.stratagems.offensive),
            this.getRandomItem(data.stratagems.supporting),
            this.getRandomItem(data.stratagems.defensive),
            this.getRandomItem(data.stratagems.mission),
          ],
          booster: this.getRandomItem(data.boosters),
        };
      })
    );
  }

  private getRandomItem(array: any[]): any {
    return array[Math.floor(Math.random() * array.length)];
  }
}
