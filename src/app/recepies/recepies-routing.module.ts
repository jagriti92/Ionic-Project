import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecepiesPage } from './recepies.page';
import { RecepieDetailsPage } from './recepie-details/recepie-details.page';

const routes: Routes = [
  {
    path: '',
    component: RecepiesPage
  },
  {
    path: ':id',
    component: RecepieDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecepiesPageRoutingModule {}
