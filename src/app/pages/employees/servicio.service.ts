import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Servicio } from 'src/app/shared/models/servicio.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  servicios: Observable<Servicio[]> // the declaration "servicios becomes a OBSERVABLE" 1:44:40

  private serviciosCollection: AngularFirestoreCollection<Servicio>
  constructor(private readonly afs: AngularFirestore)/* injectando firestore */ {
    this.serviciosCollection = afs.collection<Servicio>('servicios') // en la "()" indica el PATH {aqui es el nombre de nuestra coleccion}
    this.getServicios(); // se instancia getservicios (it becomes lighter text)
  }

  onDeleteServicios(servId: string): Promise<void> {
    return new Promise( async (resolve, reject) => {
      try {
        const result = await this.serviciosCollection.doc(servId).delete();
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    })
  }

  onSaveServicio(servicio: Servicio, servId: string): Promise<void> { // 1:33:36
    return new Promise( async (resolve, reject) => {
      try {
        const id = servId || this.afs.createId();
        const data =  {id, ... servicio}// aqui se CONCATENA con "servicio". 1:34:04
        const result = await this.serviciosCollection.doc(id).set(data);
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    }) // quiere decir que la promise puede ir todo bien (resolve) o todo mal (rejected)


  } // la id es para controlar si se actualizo o crear un nuevo servicio

  // este metodo se encarga de ir a firebase, leer los datos y guardarlos en la propiedad "servicios"
  private getServicios(): void {
    this.servicios = this.serviciosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Servicio)),
    )
  }
}
