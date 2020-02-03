import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
  })
 export class BodyComponent {
   mostrar = true;
    frase: any = {
      mensaje: 'Megadeth es una banda de trash metal originaria de Estados Unidos',
      autor: 'Megadeth'

    };
    personajes: string[] = ['Simphony of destruction', 'Tornado of souls', 'Hangar 18'];

    mostrar2 = true;
    frase2: any={
    mensaje2: 'Led Zeppelin banda de rock clasico originaria de Reino Unido',
      autor2: 'Led Zeppelin'
      };

    personajes2: string[] = ['Stairway to heaven', 'Whole lotta love', 'Communication breakdown'];

    mostrar3 = true;
    frase3: any={
    mensaje3: 'Iron maiden es una banda de heavy metal originaria de reino unido',
      autor3: 'Iron maiden'
      };

    personajes3: string[] = ['Hallowed by thy name', 'Aces high', 'Wasted years'];
    }
