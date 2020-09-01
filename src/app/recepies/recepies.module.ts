import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecepiesPageRoutingModule } from './recepies-routing.module';

import { RecepiesPage } from './recepies.page';
import { RecepieDetailsPage } from './recepie-details/recepie-details.page';
import { RecepieItemComponent } from './recepie-item/recepie-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecepiesPageRoutingModule
  ],
  declarations: [RecepiesPage, RecepieItemComponent],
  exports: [RecepieItemComponent]
})
export class RecepiesPageModule {}
