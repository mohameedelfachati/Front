import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Demandemisdispo } from '../model/demandemisdispo.model';
import { CRUDParcService } from '../service/crud-parc.service';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Voiture } from '../model/voiture.model';




@Injectable({
  providedIn: 'root'
})

export class ServiceParcService extends CRUDParcService<Demandemisdispo>{
  uri: String ='http://localhost:8080/services/api/demandemisdisposition/api'

  constructor(public http: HttpClient) {
    super(http, ``)
  }
  initForm(): Observable<Voiture[]>{
    return this.http.get<Voiture[]>('',{responseType: 'text' as 'json'})
  }
  getAllDemandemisDispo(): Observable<Demandemisdispo[]>{
    return this.http.get<Demandemisdispo[]>(this.uri+'/demande-mise-dispositions',{responseType: 'text' as 'json'}) 
  }
}
