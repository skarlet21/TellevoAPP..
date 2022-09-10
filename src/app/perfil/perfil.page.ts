import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  


  constructor(private menuCtrl: MenuController) {

  }

  onClick() {

    this.menuCtrl.toggle();

  }

  
  
  ngOnInit() {
  }

}
