import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/pages/employees/servicio.service';
import { Servicio } from '../../models/servicio.interface';

@Component({
  selector: 'app-servicio-form',
  templateUrl: './servicio-form.component.html',
  styleUrls: ['./servicio-form.component.css'],
})
export class ServicioFormComponent implements OnInit {
  servicio: Servicio = null;
  servicioForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private serviciosSvc: ServiciosService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.servicio = navigation?.extras?.state?.value;
    this.initForm();
  }

  ngOnInit(): void {
    if (typeof this.servicio === 'undefined') {
      // here we say if there is a empleado
      // Redirect!
      this.router.navigate(['new']);
    } else {
      this.servicioForm.patchValue(this.servicio);
    } // 1:04:22
  }

  onSave(): void {
    console.log('Guardado!', this.servicioForm.value);
    if (this.servicioForm.valid) {
      const servicio = this.servicioForm.value;
      const servicioId = this.servicio?.id || null;
      this.serviciosSvc.onSaveServicio(servicio, servicioId); // aqui se espera el formulario y un id
      // try saving a service and seeing if it gets saved to the collection
      this.servicioForm.reset();
      alert('Guardado a firebase!');
    }
  }
  onGoBackToList(): void {
    this.router.navigate(['list']);
  }
  // declaring the FORM
  // group waits for an OBJECT
  private initForm(): void {
    this.servicioForm = this.fb.group({
      nombre: ['', [Validators.required]], // 57:57
      formacontacto: ['', [Validators.required]],
      precio: ['', [Validators.required]], // 54:32
      ubicacion: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    });
  }
}
