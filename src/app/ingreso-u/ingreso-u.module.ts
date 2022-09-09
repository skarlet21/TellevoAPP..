import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoUPageRoutingModule } from './ingreso-u-routing.module';

import { IngresoUPage } from './ingreso-u.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    IngresoUPageRoutingModule
  ],
  declarations: [IngresoUPage]
})
export class IngresoUPageModule {}
