import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiServicesService {


  constructor(public alertController: AlertController) {}

  async alertaInformativa() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  a
}
