import { ServicioFormComponent } from './servicio-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ServicioFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ServicioFormComponent],
})
export class ServicioFormModule {}
