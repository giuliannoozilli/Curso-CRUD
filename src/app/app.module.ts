import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderModule } from './shared/components/header/header.module';
import { ServicioFormModule } from './shared/components/servicio-form/servicio-form.module';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestore } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    ServicioFormModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFirestore
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent],
})
export class AppModule {}

