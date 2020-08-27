import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recepie } from '../recepies.model';
import { RecepieDetailsService } from '../recepie-details.service';

@Component({
  selector: 'app-recepie-details',
  templateUrl: './recepie-details.page.html',
  styleUrls: ['./recepie-details.page.scss'],
})
export class RecepieDetailsPage implements OnInit {
  locateRecipie: Recepie;
  constructor(private activatedRoute: ActivatedRoute, private recepieDetailsService: RecepieDetailsService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('id')){
        return;
      }
      const rId = paramMap.get('id');
      this.locateRecipie = this.recepieDetailsService.getRecepieDetails(rId);
      console.log(this.locateRecipie)
    })
  }

}
