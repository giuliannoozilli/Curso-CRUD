import { Component } from '@angular/core';

@Component({
  template: `<app-servicio-form></app-servicio-form>`,
})
export class EditComponent {
  /*
  servicio: Servicio = null;
  servicioForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {
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
  */
}
