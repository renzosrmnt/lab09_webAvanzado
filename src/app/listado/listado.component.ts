import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  items = [
    {
      title: 'Blanca Flor',
      imageUrl: 'assets/images/image1.jpg',
      description: 'Harina Preparada Blanca Flor 900gr'
    },
    {
      title: 'Leche Gloria',
      imageUrl: 'assets/images/image2.jpg',
      description: 'Leche Evaporada Gloria en lata 300gr'
    },
    {
      title: 'Sello de Oro',
      imageUrl: 'assets/images/image3.png',
      description: 'Margarina Sello de Oro 200gr'
    }
  ];

  constructor(){}

  ngOnInit(): void {
  }
}
