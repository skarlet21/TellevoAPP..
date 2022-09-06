import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroGenPageRoutingModule } from './registro-gen-routing.module';

import { RegistroGenPage } from './registro-gen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroGenPageRoutingModule
  ],
  declarations: [RegistroGenPage]
})
export class RegistroGenPageModule {}
