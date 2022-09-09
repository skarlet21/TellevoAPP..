import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
 @ViewChild(IonModal) modal: IonModal;


  constructor(private menuCtrl: MenuController) { }


  onClick(){

    this.menuCtrl.toggle();

  }
  cancel(){
    this.modal.dismiss(null, 'cancel');
  }

  
  ngOnInit() {
  }

}
