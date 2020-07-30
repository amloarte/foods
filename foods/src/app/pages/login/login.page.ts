import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { LoginService } from '../../services/login.service';
import { UiServicesService } from '../../services/ui-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {


  loginUser = {
    usuario: '',
    password: ''
  };

  constructor(private loginService: LoginService,
              private navCtrl: NavController,
              private uiservice: UiServicesService ) { }

  ngOnInit() {

  }

  async login(fLogin: NgForm){
    if (fLogin.invalid){ return; }
    const valido = await this.loginService.login( this.loginUser.usuario, this.loginUser.password );
    if ( valido ) {
      this.navCtrl.navigateRoot( '/categorias' );
    } else {
      this.uiservice.alertaInformativa('Usuario y contraseña Incorrectas');
    }
  }

  // loginGoogle( fLogin: NgForm  ){
  //   this.loginService.loginGoogle( this.loginUser.usuario, this.loginUser.password ).then( () => {
  //       this.router.navigate(['/categorias']);
  //   }).catch( err => {
  //       this.uiservice.alertaInformativa('Error al iniciar con Google' + err );
  //   });
  // }
}
