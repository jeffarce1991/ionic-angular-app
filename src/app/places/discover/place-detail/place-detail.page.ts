import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private router: Router,
    private navController: NavController,
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    private modalController: ModalController
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(it => {
      if(!it.has('placeId')) {
        this.navController.navigateBack('/places/tabs/discover');
        return
      }

      this.place = this.placesService.getPlace(it.get('placeId'))
    })
  }

  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover')
    // this.navController.navigateBack('/places/tabs/discover')
    // this.navController.pop()
    this.modalController
      .create({
        component: CreateBookingComponent,
        componentProps: {
          selectedPlace: this.place
        }
        })
      .then(it => {
        it.present();
        return it.onDidDismiss();
      })
      .then(it => {
        console.log(it.data, it.role);
        if (it.role == 'confirm') {
          console.log('BOOKED!');
        }
      });
  }
}
