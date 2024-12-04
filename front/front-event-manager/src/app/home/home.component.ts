import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Event } from '../interfaces/event.interface';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  events$!: Observable<Event[]>;

  constructor(private readonly eventService: EventService) {}

  ngOnInit(): void {
      this.eventService.loadEvents().subscribe();
      this.events$ = this.eventService.getEvents();
  }

}
