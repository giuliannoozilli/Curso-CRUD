import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      value: null, // you can call this variable anything, employees, etc
    },
  };

  fakeData = [
    {
      nombre: 'Hazbin Hotel',
      formacontacto: 'leo@gmail.com',
      precio: '65.200',
      ubicacion: 'Independencia 314',
      descripcion: 'Like a hula hula hoop, hula hula hoop, HULAHOOP!',
    },
    {
      nombre: 'Hotel Cipo',
      formacontacto: 'gaby@hubmail.com',
      precio: '4.500',
      ubicacion: 'Esmeralda 129',
      descripcion: 'lorem ipsum, yes.',
    },
    {
      nombre: 'xxTour',
      formacontacto: 'hubert@phub.com',
      precio: '170.245',
      ubicacion: 'Av. Alem 696',
      descripcion: 'Im coming for you, Zealous!',
    },
    {
      nombre: 'Vuelta por Bellas Artes',
      formacontacto: 'artsytype@proko.com',
      precio: '4.820',
      ubicacion: 'Neuquen 108',
      descripcion: 'hi uwu i loooove art im a artsy type 😊 ',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onGotoEdit(item: any): void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }
  onGotoSee(item: any): void {
    this.navigationExtras.state.value = item;

    this.router.navigate(['details'], this.navigationExtras);
  }
  onGotoDelete(item: any): void {
    alert('Borra2!');
  }
}
