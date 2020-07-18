import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { LoginService } from '../../services/login.service';
import { UiServicesService } from '../../services/ui-services.service';
import { IUsuario } from '../../interface/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  @Output() avatarSel = new EventEmitter<string>();

  loginUser = {
    usuario: '',
    password: ''
  };

  registerUser: IUsuario = {
    nombres: '',
    email: '',
    usuario: '',
    password: '',
    avatar: 'av-1.png'
  };

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
  ];

  avatarSlide = {
    slidesPerView: 3.5
  };

  constructor(private loginService: LoginService,
              private navCtrl: NavController,
              private uiservice: UiServicesService   ) { }

  ngOnInit() {

  }

  async login(fLogin: NgForm){

    if (fLogin.invalid){ return; }

    const valido = await this.loginService.login( this.loginUser.usuario, this.loginUser.password );

    console.log(fLogin.value);

    if ( valido ) {
      this.navCtrl.navigateRoot( '/categorias' );
    } else {
      this.uiservice.alertaInformativa('Usuario y contraseña Incorrectas');
    }
  }

  async registro(fRegistro: NgForm){
    if (fRegistro.invalid){ return; }
    const valido = await this.loginService.registro( this.registerUser );
    if ( valido ) {
      this.navCtrl.navigateRoot( '/categorias' );
    } else {
      this.uiservice.alertaInformativa('Ese correo electronico ya existe');
    }
  }

  SeleccionarAvatar( avatar ){
    this.avatars.forEach(av => av.seleccionado = false);
    avatar.seleccionado = true;
    this.avatarSel.emit( avatar.img );
  }
}
