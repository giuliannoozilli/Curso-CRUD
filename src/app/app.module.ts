import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderModule } from './shared/components/header/header.module';
import { ServicioFormComponent } from './shared/components/servicio-form/servicio-form.component';
import { ServicioFormModule } from './shared/compnents/servicio-form/servicio-form.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicioFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    ServicioFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
