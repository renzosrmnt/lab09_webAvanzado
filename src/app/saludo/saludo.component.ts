import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class Saludoomponent {
  titulo: string = '¡Bienvenido a Angular';
  mensaje: string = 'Este es un componente de ssaludo creado en Angular.';

  constructor(){}

  ngOnInit(): void{

  }
}
