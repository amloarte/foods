import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUsuario } from '../../interface/usuario';
import { UsuarioService } from '../../services/usuario.service';
@Component({
  selector: 'app-registo',
  templateUrl: './registo.page.html',
  styleUrls: ['./registo.page.scss'],
})
export class RegistoPage implements OnInit {

  usuario: IUsuario [] = [];
  constructor(private userService: UsuarioService) { }

  ngOnInit() {
  }

  addNewUser(form:NgForm) {
    console.log(form.value);
    this.userService.postUser(form.value)
      .subscribe((nuevaRetroalimentacion) => {
        console.log(nuevaRetroalimentacion);
        console.log('Se guardo')
        this.resetForm();
      });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
  }
}
