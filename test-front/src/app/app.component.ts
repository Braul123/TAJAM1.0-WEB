import { Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
  public isMessage : boolean = false;
  public usuarioForm: FormGroup;
  public privacity: string = 'Copyright © 2015 - Tajem Creative';

  ngOnInit(): void {
    //Crea el formulario de validación y obtiene todos los usuarios administrativo 
    this.generarFormGroup();
  }


  /**
  * Genera el formulario de validación
  */
 generarFormGroup(): void {
  this.usuarioForm = new FormGroup({

    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(''),
    
  });

}
  // Cambia el estilo del nav principal
  change(item : string, page? : string) : void {

    //Cambia de pagina en el navegador
    this.item = item;

    //Si cambio de pagina en el header
    if(page){
      this.page = page;
    }
  }

  //Envia los datos y muestra un mensage
  send(): void {
    this.isMessage = true; 

    //Oculta el mensaje des pues de un segundo
    setTimeout(() => {
      this.isMessage = false; 
    }, 1000);

    //Resetea el valor del formulario
    this.usuarioForm.reset();
  }
}
