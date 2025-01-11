import { Component } from '@angular/core';
import { Videojuego } from '../models/index';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = 'clase04';
  hayError = true;
  estadoEnvio: 'pendiente' | 'entregado' | 'rechazado' = 'entregado';
  cargando = false;
  estudiantes = ['Goku', 'Trunks', 'Gohan'];
  //videojuegos = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4'];
  carrito: string[] = [];
  videojuegos: Videojuego[] = [
    {
      nombre: 'Resident Evil 3',
      lanzamiento: new Date('1999-04-04'),
      soldout: true,
    },
    {
      nombre: 'Age of Empires II',
      lanzamiento: new Date('1998-03-01'),
      soldout: false,
    },
    {
      nombre: 'GTA V',
      lanzamiento: new Date('2013-09-17'),
      soldout: true,
    },
  ];


  constructor() {
    this.cargando = true;
    setTimeout(() => {
      this.cargando = false;
    }, 3000);
    // setInterval(() => {
    //   this.hayError = !this.hayError;
    // }, 1000);
  }

  agregarAlCarrito(videojuego: Videojuego) {
    if (videojuego.soldout) {
      alert('No hay stock!');
    } else {
      this.carrito.push(videojuego.nombre);
    }
  }
}

