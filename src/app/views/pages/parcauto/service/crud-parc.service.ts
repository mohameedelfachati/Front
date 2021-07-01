import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CRUDParcService<T>{

  constructor(
    protected http: HttpClient,
    protected url: string
  ) { }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url, { responseType: 'text' as 'json' });
  }

  getById(id: any): Observable<T> {
    return this.http.get<T>(this.url + '/' + id, { responseType: 'text' as 'json' });
  }
  add(t: T): Observable<string> {
    return this.http.post<string>(this.url, t, { responseType: 'text ' as 'json' });
  }
  edit(id: any, t: T): Observable<string> {
    return this.http.put<string>(this.url + '/' + id, t, { responseType: 'text' as 'json' });
  }
  delete(id: any): Observable<string> {
    return this.http.delete<string>(this.url + '/' + id, { responseType: 'text' as 'json' });
  }
}
