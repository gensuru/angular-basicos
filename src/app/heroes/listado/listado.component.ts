import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['SpiderMan', 'IronMan', 'Hulk', 'Thor'];
  public heroeBorrado: string;
  borrado: boolean = false;


  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop();
    this.borrado = true;
    console.log(this.heroeBorrado);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
