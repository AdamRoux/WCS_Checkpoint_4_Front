import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../shared/models/Event.model';
import { EventService } from '../shared/services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.sass']
})
export class EventComponent implements OnInit {
  
  event: Event | undefined

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.eventService.getEventById(params.id).subscribe((response: Event) => {
        this.event = response;
        console.log(this.event);
      })
    })
  }

}
