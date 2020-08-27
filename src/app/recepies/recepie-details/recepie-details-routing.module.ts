import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecepieDetailsPage } from './recepie-details.page';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecepieDetailsPageRoutingModule {}
