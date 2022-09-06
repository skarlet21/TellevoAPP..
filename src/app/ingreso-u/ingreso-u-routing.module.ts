import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoUPage } from './ingreso-u.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoUPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoUPageRoutingModule {}
