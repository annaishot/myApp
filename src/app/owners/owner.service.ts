import { Injectable } from '@angular/core';
import { Owner } from '../owner';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) { }
  private ownersUrl = 'http://5c92dbfae7b1a00014078e61.mockapi.io/owners';
  getOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.ownersUrl);
  }

}