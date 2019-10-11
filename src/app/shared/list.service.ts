import { Injectable } from '@angular/core';
import { ListModel } from './list-model';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private lists: ListModel[] = [];

  constructor(public http: HttpClient, private platform: Platform, public local: Storage) {
    this.getLists();
    console.log('carga list');
    
  }

  private getLists() {
    this.getFromLocal();
  }

  public addList(name: string) {
    let list = new ListModel(name, this.lists.length);
    this.lists = [...this.lists, list];
    return list;
  }
getFromLocal() {
    /* this.local.ready().then(() => {
      this.local.get('list').then(
        data => {
          let locallists: ListModel[] = [];
          if (data) {
            for (let list of data) {
              locallists.push(new ListModel(list.name, list.id))
            }
          }
          this.lists = locallists;
        }
      )
    }); */
    let data = JSON.parse(localStorage.getItem('list'));
    let locallists: ListModel[] = [];
    for (let list of data) {
      locallists.push(new ListModel(list.name, list.id))
    }
    this.lists = locallists;
    console.log(this.lists);
    
  }

  public saveLocally(){
    /* this.local.ready().then(()=>{
      this.local.set('list', this.lists);
    }); */
    localStorage.setItem('list', JSON.stringify(this.lists));
  }
}
