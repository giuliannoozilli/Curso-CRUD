import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Servicio } from 'src/app/shared/models/servicio.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  servicio: Servicio;
  servicioForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    this.servicio = navigation?.extras?.state;
    this.initForm();
  }

  ngOnInit(): void {
    if (typeof this.servicio === 'undefined'){
      //Redirect!
      this.router.navigate(['new'])
    } else{
      this.servicioForm.patchValue(this.servicio)
    } //1:04:22
  }

  onSave(): void {
    console.log('Guardado!', this.servicioForm.value);
  }
  onGoBackToList():void {
    this.router.navigate(['list'])
  }
  // declaring the FORM
  // group waits for an OBJECT
  private initForm(): void {
    this.servicioForm = this.fb.group({
      name: ['', [Validators.required]], // 57:57
      formacontacto: ['', [Validators.required]],
      precio: ['', [Validators.required]], // 54:32
      ubicacion: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    });
  }
}
