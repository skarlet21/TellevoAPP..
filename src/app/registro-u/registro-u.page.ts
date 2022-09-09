import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import {AlertController} from '@ionic/angular'

@Component({
  selector: 'app-registro-u',
  templateUrl: './registro-u.page.html',
  styleUrls: ['./registro-u.page.scss'],
})
export class RegistroUPage implements OnInit {
  formularioRegistro: FormGroup;
  
  constructor(public fb: FormBuilder,
    public alertController: AlertController) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'email': new FormControl("",Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required),
      'carrera': new FormControl("", Validators.required),
    });
  }
  ngOnInit() {}
  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alerta = await this.alertController.create({
        header :"Datos Faltantes",
        message:"Debe rellenar todos los datos para completar el registro",
        buttons:["OK"]
      });
    await alerta.present();
    return;
    }
    var usuario = {
      nombre: f.nombre,
      email: f.email,
      password: f.password,
      carrera: f.carrera,
      }
    localStorage.setItem('usuario',JSON.stringify(usuario));
    console.log(usuario);
  }

}
