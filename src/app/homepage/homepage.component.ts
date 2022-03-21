import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../shared/models/Event.model';
import { EventService } from '../shared/services/event.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {

  events: Event[] | undefined;


  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((response: Event[]) => {
      this.events = response;
      console.log(this.events);
    })
  }

  navigateToCreateForm() {
    this.router.navigateByUrl("/add-event");
  }

}
