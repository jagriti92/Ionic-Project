import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../place.model';
import { PlaceService } from '../../place.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {

  place: Place;

  constructor(
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    private placeService: PlaceService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      if(!params.has('placeId')){
        this.navController.navigateBack(['/places/tabs/offers']);
        return;
      }
      this.place = this.placeService.getPlace(params.get('placeId'));
    })
  }

}
