import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { PlaceService } from '../../place.service';
import { Place } from '../../offers/place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(private router: Router,
    private navController: NavController,
    private activatedRoute: ActivatedRoute,
    private placeService: PlaceService,
    private modelController: ModalController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      if(!params.has('placeId')){
        this.navController.navigateBack(['/places/tabs/discover']);
        return;
      }
      this.place = this.placeService.getPlace(params.get('placeId'));
    });
  }
  onBookClick(){
    //  this.router.navigateByUrl('/places/tabs/discover');
    // this.navController.navigateBack('/places/tabs/discover')
    this.modelController.create({component: CreateBookingComponent,
    componentProps: {selectedPlace: this.place}}).then(mE => {
      mE.present();
      return mE.onDidDismiss();
    }).then(resultData => {
      console.log(resultData)
      if(resultData.role === 'confirm'){
        console.log('Booked');
      }
    })
  }
}
