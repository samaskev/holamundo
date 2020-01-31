import { Component } from '@angular/core';
@Component({
    selector: 'app-body',
    templateUrl: './body.components.html'
})
export class BodyComponents {
    mostrar = true;
    frase: any = {
        mensaje: 'La vida es cruel, porque no ha decerlo la muerte tambien',
        autor: 'Cap. Jones'
    }
    personajes: string[] = ['Cap. Barbosa', 'Cap. Sparrow', 'Cap. Jones'];
}