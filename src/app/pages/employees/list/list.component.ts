import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ServiciosService } from '../servicio.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  servicio$ = this.serviciosSvc.servicios // we reference the serviciossvc from the constructor parameter
  navigationExtras: NavigationExtras = {
    state: {
      value: null, // you can call this variable anything, employees, etc
    },
  };
<<<<<<< HEAD
  /*
  fakeData = [
=======

  /* fakeData = [
>>>>>>> 24788d0b8c78f13108116c714fa011a534d9ea1a
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
<<<<<<< HEAD
  ]; */
  constructor(private router: Router, private serviciosSvc: ServiciosService) {}
=======
  ];*/
  constructor(private router: Router) {}
>>>>>>> 24788d0b8c78f13108116c714fa011a534d9ea1a

  ngOnInit(): void {}

  onGotoEdit(item: any): void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }
  onGotoSee(item: any): void {
    this.navigationExtras.state.value = item;

    this.router.navigate(['details'], this.navigationExtras);
  }
  async onGotoDelete(servId: string/*item: any*/): /*void*/ Promise<void> {
    // 1:43:38
    try {
      await this.serviciosSvc.onDeleteServicios(servId);
      alert('Borra2!');
    } catch (err) {
      console.log(err);
    }
  }
}
