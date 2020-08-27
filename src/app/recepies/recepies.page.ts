import { Component, OnInit } from '@angular/core';
import { RecepieDetailsService } from './recepie-details.service';
import { Recepie } from './recepies.model';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.page.html',
  styleUrls: ['./recepies.page.scss'],
})
export class RecepiesPage implements OnInit {

  items: Recepie[];
  constructor(private recepieDetailsService: RecepieDetailsService) { }

  ngOnInit() {
    this.showAllRecepie();
  }
  showAllRecepie() {
    this.items = this.recepieDetailsService.getAllRecepie();
  }
}
