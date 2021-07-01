import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRestService } from '../CRUD-repo/http-rest.service';
import { Espece } from '../models/espece';
import { FicheEntree } from '../models/fiche-entree';
import { HttpParams } from '@angular/common/http';


export const createRequestOption = (req?: any): HttpParams => {
  let options: HttpParams = new HttpParams();

  if (req) {
    Object.keys(req).forEach(key => {
      if (key !== 'sort') {
        options = options.set(key, req[key]);
      }
    });

    if (req.sort) {
      req.sort.forEach((val: string) => {
        options = options.append('sort', val);
      });
    }
  }

  return options;
};


export type EntityArrayResponseType = HttpResponse<FicheEntree[]>


@Injectable({
  providedIn: 'root'
})


export class AbattoirService extends HttpRestService<FicheEntree> {

  constructor(public http: HttpClient) {
    super(http, ``)
  }
  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<FicheEntree[]>(this.url, { params: options, observe: 'response' });
  }
  initForm(): Observable<Espece[]> {
    return this.http.get<Espece[]>('', { responseType: 'text' as 'json' });
  }
}
