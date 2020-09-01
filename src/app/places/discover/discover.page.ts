import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../place.service';
import { Place } from '../offers/place.model';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  loadedPlaces: Place[];

  constructor(private placeService: PlaceService,
    private menuController: MenuController) { }

  ngOnInit() {
    this.loadedPlaces = this.placeService.getPlaces();
  }
  onOpenMenu(){
    this.menuController.toggle();
  }

}
