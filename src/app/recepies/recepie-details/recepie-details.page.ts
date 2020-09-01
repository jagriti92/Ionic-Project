import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recepie } from '../recepies.model';
import { RecepieDetailsService } from '../recepie-details.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recepie-details',
  templateUrl: './recepie-details.page.html',
  styleUrls: ['./recepie-details.page.scss'],
})
export class RecepieDetailsPage implements OnInit {
  locateRecipie: Recepie;
  constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private recepieDetailsService: RecepieDetailsService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('id')){
        this.router.navigate(['/recepies']);
        return;
      }
      const rId = paramMap.get('id');
      this.locateRecipie = this.recepieDetailsService.getRecepieDetails(rId);
    });
  }
  onDelete(){
    this.alertController.create({
      header: 'Are you Sure?',
      message: 'Do you really want to delete the recipe?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recepieDetailsService.deleteRecepie(this.locateRecipie.id);
            this.router.navigate(['/recepies']);
          }
        }
      ]
    }).then(aElem => {
      aElem.present();
    })
  }
}
