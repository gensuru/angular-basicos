import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `

        <h1>{{ titulo }}</h1>
        
        
        
        <button (click)="acumular(1)">+ 1</button>
        <span>{{ numero }}</span>
        <button (click)="acumular(-1)">- 1</button>
        
        <br>
        <br>
        <br>
        
        
        <h3>La base es: <strong>{{ base }}</strong></h3>
        <button (click)="acumular5(base)">+{{base}}</button>
        
        <h3>{{ numeroBase }}</h3>
        
        <button (click)="acumular5(-base)">-{{base}}</button>
    `
})

export class ContadorComponent{

    titulo: string = 'contador App';
      numero: number = 10;
      base: number = 5;
      numeroBase: number = 10;
    
    
      acumular(valor: number){
        this.numero += valor;
      }
    
      acumular5(valor: number){
        this.numeroBase += valor;
      }
}