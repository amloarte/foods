import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IUsuario } from 'src/app/interface/usuario';
import { NavController } from '@ionic/angular';
import { LoginService } from '../../services/login.service';
import { UiServicesService } from '../../services/ui-services.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  @Output() avatarSel = new EventEmitter<string>();

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
              private uiservice: UiServicesService,
              private router: Router) { }

  ngOnInit() {
  }

  SeleccionarAvatar( avatar ){
    this.avatars.forEach(av => av.seleccionado = false);
    avatar.seleccionado = true;
    this.avatarSel.emit( avatar.img );
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


}
