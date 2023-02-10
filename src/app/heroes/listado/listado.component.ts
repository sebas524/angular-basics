import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['spiderman', 'ironman', 'hulk', 'thor'];

  borrado: string = '';

  borrarHeroe() {
    this.borrado = this.heroes.shift() || '';
  }
}
