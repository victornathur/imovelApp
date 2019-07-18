import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-imovel-add',
  templateUrl: './imovel-add.page.html',
  styleUrls: ['./imovel-add.page.scss'],
})
export class ImovelAddPage implements OnInit {
  imovel = {
    "descricao":"",
    "categoria":"",
    "endereco":"",
    "qtd_quartos":"",
    "qtd_banheiros":"",
    "luxo": false

  }


  constructor(public modal:ModalController) { }

  ngOnInit() {
  }
  add(){
    this.modal.dismiss(this.imovel)
  }

}