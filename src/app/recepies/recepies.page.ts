import { Component, OnInit } from '@angular/core';
import { RecepieDetailsService } from './recepie-details.service';
import { Recepie } from './recepies.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.page.html',
  styleUrls: ['./recepies.page.scss'],
})
export class RecepiesPage implements OnInit {

  items: Recepie[] = [];
  testData: any[] = [
    { label: 'Test10', type: 'radio', checked: false, value: 0, name: 'test' },
    { label: 'Test20', type: 'radio', checked: false, value: 1, name: 'test1' },
    { label: 'Test30', type: 'radio', checked: false, value: 2, name: 'test2' },
    { label: 'Test40', type: 'radio', checked: false, value: 3, name: 'test3' }]
  constructor(private recepieDetailsService: RecepieDetailsService,
    private alertController: AlertController, ) { }

  ngOnInit() {
    this.showAllRecepie();
  }
  showAllRecepie() {
    this.items = this.recepieDetailsService.getAllRecepie();
  }
  ionViewWillEnter(){
    this.items = this.recepieDetailsService.getAllRecepie();
  }
  onAlertClick() {
    this.alertController.create({
      header: 'Select a value',
      inputs: this.testData,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Ok',
          handler: (data) => {
            this.testData.filter(dt => {
              dt.checked = false;
              if (dt.value === data) {
                console.log('Selecte Value', data);
                return dt.checked = true;
              }
            })
          }
        }
      ]
    }).then(aElem => {
      aElem.present();
    })
  }
}
