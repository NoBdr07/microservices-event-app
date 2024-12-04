import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Event } from '../interfaces/event.interface';

@Injectable({
    providedIn: 'root',
})
export class EventService {
    private readonly apiUrl = `${environment.apiUrl}/events`;

    constructor(private readonly http: HttpClient) {}

    private eventsSubject = new BehaviorSubject<Event[]>([]);
    events$: Observable<Event[]> = this.eventsSubject.asObservable();

    loadEvents(): Observable<Event[]> {
        return this.http.get<Event[]>(`${this.apiUrl}/all`).pipe(
            tap((events) => this.eventsSubject.next(events))
        )
    }

    getEvents(): Observable<Event[]> {
        return this.events$;
    }

}