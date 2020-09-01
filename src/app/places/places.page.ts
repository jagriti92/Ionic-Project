import { Component, OnInit } from '@angular/core';
import { PlaceService } from './place.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  constructor(private placeService: PlaceService) { }

  ngOnInit() {
  }

}
