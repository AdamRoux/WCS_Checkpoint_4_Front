import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Continent } from '../models/Continent.model';

@Injectable({
  providedIn: 'root'
})
export class ContinentService {

  constructor(private http: HttpClient) { }

  public getContinents(): Observable<Continent[]> {
    return this.http.get<Continent[]>(environment.backUrl + 'continents');
  }
}
