import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubcategoriaService } from '../../services/subcategoria.service';
import { RespuestaSubcategoria } from '../../interface/subcategoria';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-subcategorias',
  templateUrl: './subcategorias.page.html',
  styleUrls: ['./subcategorias.page.scss'],
})
export class SubcategoriasPage implements OnInit {

  subcategorias: RespuestaSubcategoria [] = [];
  idCategoria;

  ngOnInit() {
    this.idCategoria = this.route.snapshot.params['id'];
    this.getSubCategorias();
  }

  constructor(private route: ActivatedRoute, 
              private subcategoriaService: SubcategoriaService,
              private camera: Camera) {  }

  getSubCategorias() {
    this.subcategoriaService.getSubCategory(this.idCategoria)
    .subscribe( resp => this.subcategorias = resp);
  }

  camara(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
  }

}