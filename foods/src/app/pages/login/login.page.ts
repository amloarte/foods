import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  //slidePrincipal: any = {allowTouchMove: false};

  avatarSlide = {
    slidesPerView: 3.5
  };

  loginUser = {
    usuario: 'amloarte',
    password: '123456'
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

  constructor(private loginService: LoginService,
              private navCtrl: NavController   ) { }

  ngOnInit() {

  }

  async login(fLogin: NgForm){
    if (fLogin.invalid){ return; }

    const valido = await this.loginService.login( this.loginUser.usuario, this.loginUser.password )
    console.log( valido );

    if ( valido ) {
      const a = this.navCtrl.navigateRoot( '/categorias' )
      console.log(a)
    } else {

    }
  }

  registro(fRegistro: NgForm){
    console.log( fRegistro.value );
  }

  SeleccionarAvatar( avatar ){
    this.avatars.forEach(av => av.seleccionado = false);
    avatar.seleccionado = true;
  }

  // LockSwipes( lock: boolean ){
 
  // }

  // mostrarRegistro(){
  //   this.slidePrincipal =  {allowTouchMove: true};
  //   this.slidePrincipal.slideTo(0);
  //   this.slidePrincipal =  {allowTouchMove: false};
  // }

  // mostrarLogin(){
  //   this.slidePrincipal =  {allowTouchMove: false};
  //   this.slidePrincipal.slideTo(0);
  //   this.slidePrincipal =  {allowTouchMove: true};
  // }
}
