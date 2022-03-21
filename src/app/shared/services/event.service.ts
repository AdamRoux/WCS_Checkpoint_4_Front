import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Event } from '../models/Event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private Http: HttpClient) { }

  public createEvent(eventParam: FormData): Observable<FormData> {
    return this.Http.post<FormData>(environment.backUrl + 'events', eventParam);
  }

  public getEventById(id: number): Observable<Event> {
    return this.Http.get<Event>(environment.backUrl + 'events/' + id);
  }

  public getEvents(): Observable<Event[]> {
    return this.Http.get<Event[]>(environment.backUrl + 'events');
  }
}
