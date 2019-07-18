import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'; // Passo 3 - Câmera
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario = {
    "nome": "",
    "url": ""
  }

  constructor(public modalController: ModalController, private camera: Camera) { }

  ngOnInit() {
  }

  add() {
    this.modalController.dismiss(this.usuario)
  }

  take_picture() { // Passo 4 | Conjunto de opções...
    const options: CameraOptions = {
      quality: 100, // Qualidade da Foto. 0..100
      destinationType: this.camera.DestinationType.DATA_URL, // Qual é o tipo de destino, referencia local
      encodingType: this.camera.EncodingType.JPEG, // O tipo da extenção da imagem
      mediaType: this.camera.MediaType.PICTURE, // Qual é o tipo de aquivo.. Foto, vídeo..
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.usuario.url = 'data:image/jpeg;base64,' + imageData; // Definição do local de salvamento da imagem
    }, (err) => {
      alert(err)
    });
  }

}
