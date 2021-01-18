import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  //Modificables
  public title = 'tajam';
  public item: string = 'home';
  public page: string = 'one';

  // Cambia el estilo del navegador
  change(item : string, page? : string) : void {

    //Cambia de pagina en el navegador
    this.item = item;

    //Si cambio de pagina en el header
    if(page){
      this.page = page;
    }
  }
}
