import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  value = null;
  servicioForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras?.state;
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSave(): void {
    console.log('Guardado!', this.servicioForm.value);
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
