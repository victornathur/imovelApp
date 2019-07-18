import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../services/service.service';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ImovelAddPage } from '../imovel-add/imovel-add.page';



@Component({
  selector: 'app-lista',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {

  imovels;

  constructor(private http: HttpClient, public service: ServiceService, public loadingController: LoadingController, public modalController: ModalController) {
    this.loadingController.create({
      message: "Carregando Lista"
    }).then((loader) => {
      loader.present()
      this.service.list().subscribe(
        (data) => {
          this.imovels = data
          loader.dismiss()
        }
      )
    })
  }

  remove(imovel) {
    this.loadingController.create({
      message: "Removendo"
    }).then((loader) => {
      loader.present()
      this.service.delete(imovel.id).subscribe(
        (data) => {
          var i = this.imovels.indexOf(imovel);
          this.imovels.splice(i, 1);
          loader.dismiss()
        }
      )
    })
  }

  add(imovel) {
    this.loadingController.create({
      message: "Adicionando imovél"
    }).then((loader) => {
      loader.present()
      this.service.post(imovel).subscribe(
        (data) => {
          this.imovels.push(data)
          loader.dismiss()
        }
      )
    })
  }

  async modal() {
    const modal = await this.modalController.create({
      component: ImovelAddPage
    });
    await modal.present();

    modal.onDidDismiss().then((dados) => {
      this.add(dados.data)
    })
  }

}
