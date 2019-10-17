import { Injectable } from '@angular/core';
import { ListModel } from './list-model';
import { Platform } from '@ionic/angular';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private lists: ListModel[] = [];

  constructor(public http: HttpClient, private platform: Platform, public local: Storage) {
    this.getLists();
   // this.getList2();

  }

 /* private getList2() {
    this.http.get("http://localhost:3000/lists").subscribe((res) => {
      console.log(res);
      console.log("------"); 

    });
    console.log("algo");

  }*/

  private getLists() {
    this.getFromLocal();
    this.getFromServer();
  }

  public addList(name: string) {
    let list = new ListModel(name, this.lists.length);
    this.lists = [...this.lists, list];
    return list;
  }

  public getFromLocal() {
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
    if (!data) {
      this.lists = [];
    }
    else {
      let locallists: ListModel[] = [];

      for (let list of data) {
        locallists.push(new ListModel(list.name, list.id))
      }
      this.lists = locallists;

    }


  }

  private getFromServer(){
    this.http.get("http://localhost:3000/lists").subscribe((data:any)=>{
      if(data){
        data.forEach(cadaElementoIterado => {
          console.log(cadaElementoIterado.id);
          console.log(cadaElementoIterado.id);
        });
      }else{

      }
    },(error:HttpErrorResponse)=>{
      console.log(error);
    });
  }

  public saveLocally() {
    /* this.local.ready().then(()=>{
      this.local.set('list', this.lists);
    }); */
    localStorage.setItem(`list`, JSON.stringify(this.lists));
  }
}
