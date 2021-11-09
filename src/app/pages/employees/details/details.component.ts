import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Servicio } from 'src/app/shared/models/servicio.interface';
import { ServiciosService } from '../servicio.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  // below is same as in listcomponent.ts
  servicio: Servicio = null;
  navigationExtras: NavigationExtras = {
    state: {
      value: null, // you can call this variable anything, employees, etc
    },
  };
  // above is same as in listcomponent.ts

  // servicio: any = null;
  constructor(private router: Router, private serviciosSvc: ServiciosService) {
    const navigation = this.router.getCurrentNavigation();
    this.servicio = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    if (typeof this.servicio === 'undefined') {
      this.router.navigate(['list']);
    }
  }
  // below is same as in listcomponent.ts
  onGotoEdit(): void {
    this.navigationExtras.state.value = this.servicio;
    this.router.navigate(['edit'], this.navigationExtras);
  }
  async onGotoDelete(): Promise<void> {
    try {
      await this.serviciosSvc.onDeleteServicios(this.servicio?.id);
      alert('Borra2!');
      this.onGoBackToList(); // redirecting you to the list page
    } catch (err) {
      console.log(err);
    }
  }
  onGoBackToList(): void {
    // tslint:disable-next-line: max-line-length
    // this makes it that you jump to the PAGE that's mention in the "([])" (in this case, list is linked to the page of List.component.html)
    this.router.navigate(['list']);
  }
}
