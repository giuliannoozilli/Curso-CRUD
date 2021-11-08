import { ServicioFormModule } from './../../../shared/components/servicio-form/servicio-form.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';

@NgModule({
  declarations: [NewComponent],
  imports: [CommonModule, NewRoutingModule, ServicioFormModule],
})
export class NewModule {}
