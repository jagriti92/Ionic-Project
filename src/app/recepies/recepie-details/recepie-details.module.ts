import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecepieDetailsPageRoutingModule } from './recepie-details-routing.module';

import { RecepieDetailsPage } from './recepie-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecepieDetailsPageRoutingModule
  ],
  declarations: [RecepieDetailsPage]
})
export class RecepieDetailsPageModule {}
