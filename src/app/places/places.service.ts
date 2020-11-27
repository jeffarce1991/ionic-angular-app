import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place('p1',
      'Prontera',
      'Prontera (Korean: 프론테라) is the capital of the kingdom of Rune-Midgarts. Many people live actively in this city. The Prontera Church and the King`s Chivalry are also based here. ... Through the orders of King Tristan Gaebolg III, new Swordsmen are being trained to become a member of the Chivalry.',
      'https://vignette.wikia.nocookie.net/pro/images/1/13/Prontera3D.jpg/revision/latest?cb=20120526043751',
      159.99,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abc'),
    new Place('p2',
      'Payon',
      'Payon (Korean: 페이욘) is an immense village built on the edge of a mountain. The city is safe from outside invaders with the blessing of being surrounded by forests. Their unique architecture reflects the use of wood only available in their surrounding forests.',
      'https://i.imgur.com/eLfCllc.jpg',
      99.99,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abc'
      ),
    new Place('p3',
      'Aldebaran',
      'Aldebaran (Korean: 알데바란) is a peaceful town that belongs to neither the Republic of Schwarzwald nor the Rune-Midgarts Kingdom. It was built on the border between both countries and is home to the Alchemist Guild.',
      'https://vignette.wikia.nocookie.net/pro/images/f/f2/Aldebaran3D.jpg/revision/latest?cb=20130419130937',
      99.99,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abc')
  ];

  get places() {
    return [...this._places];
  }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }

  addPlace(
    title: string, 
    description: string,
    price: number,
    imageUrl: string,
    dateFrom: Date,
    dateTo, Date
  ) {
    const newPlace = new Place(
      Math.random.toString(),
      title,
      description,
      'https://vignette.wikia.nocookie.net/pro/images/1/13/Prontera3D.jpg/revision/latest?cb=20120526043751',
      price,
      dateFrom,
      dateTo,
      this.authService.userId
    );
    this._places.push(newPlace);
  }
  
  constructor(private authService: AuthService) { }
}
