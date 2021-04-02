import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public tareas = [
    { nombre: 'Tomar agua', hora: '7:00 am', isBasic: true, isChecked: false, isFavorite: false },
    { nombre: 'Desayunar', hora: '8:00 am', isBasic: true, isChecked: false, isFavorite: false },
    { nombre: 'Tender cama', hora: '9:00 am', isBasic: false, isChecked: false, isFavorite: false }
  ];

  constructor() {}

  makeFavorite(tarea: any){
    tarea.isFavorite = !tarea.isFavorite;
  }

}
