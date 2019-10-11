import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ListService } from '../shared/list.service';
import { MiservicioService } from '../shared/miservicio.service';
import { ListModel } from '../shared/list-model';
//import { ListService } from '../shared/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  alertCtrl: any;

  constructor(
    private router: Router,
    private alterCtrl: AlertController,


    //private miservicio: MiservicioService
    private listService: ListService
  ) { }

  ngOnInit() {
  }

  gotomylist(list: ListModel) {
    console.log("1");
    console.log(list);
    
    this.router.navigate(['/todos', { list: JSON.stringify(list)}]);
  }
  addNewList(name: string) {
    let list =  this.listService.addList(name);
    this.listService.saveLocally();
    this.gotomylist(list);
  }

  async showAddList() {
    console.log('Show add list');

    const addlistAlert = await this.alterCtrl.create({
      header: 'Nueva Lista',
      inputs: [{
        name: 'name',
        type: 'text',
        placeholder: 'Nombre de la lista'
      }],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('cancelar');
        }
      },
      {
        text: 'Agregar',
        handler: (data) => {
          this.addNewList(data.name);
          console.log('ok');
        }
      }]
    });
    return await addlistAlert.present();
  }
}
