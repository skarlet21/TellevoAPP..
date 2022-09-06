import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroGenPage } from './registro-gen.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroGenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroGenPageRoutingModule {}
