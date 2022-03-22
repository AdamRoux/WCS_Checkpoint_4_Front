import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Continent } from '../shared/models/Continent.model';
import { Event } from '../shared/models/Event.model';
import { ContinentService } from '../shared/services/continent.service';
import { EventService } from '../shared/services/event.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {
  showNotification: boolean = false;
  events: Event[] | undefined;
  continents: Continent[] | undefined;


  constructor(private router: Router, private eventService: EventService, private continentService: ContinentService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((response: Event[]) => {
      this.events = response;
      console.log(this.events)
    })
    this.continentService.getContinents().subscribe((response: Continent[]) => {
      this.continents = response;
    })
    if(window.sessionStorage.getItem('success') == 'deleteEvent') {
      this.showNotification = true;
     window.setTimeout(() => {
        this.showNotification = false;
      }, 2500);
      window.sessionStorage.removeItem('success');
    }
  }

  navigateToCreateForm() {
    this.router.navigateByUrl("/add-event");
  }

  deleteEventById(id: number) {
    return this.eventService.deleteEventById(id).subscribe(() => {
      window.sessionStorage.setItem('success', 'deleteEvent')
      window.location.reload();
    });
  }

  getEventsByContinentId(id: number) {
    return this.eventService.getEventsByContinentId(id).subscribe((response) => {
      this.events = response;
      console.log(response);
    })
  }

  onSortOptionChange(sortOption: any) {
    console.log(sortOption.target.value)

    switch (sortOption.target.value) {
      case '1':
        this.eventService.getEventsByContinentId(1).subscribe((response) => {this.events = response});
        break;
      case '2':
        this.eventService.getEventsByContinentId(2).subscribe((response) => {this.events = response});
        break;
      case '3':
        this.eventService.getEventsByContinentId(3).subscribe((response) => {this.events = response});
        break;
      case '4':
        this.eventService.getEventsByContinentId(4).subscribe((response) => {this.events = response});
        break;
      case '5':
        this.eventService.getEventsByContinentId(5).subscribe((response) => {this.events = response});
        break;
      case '6':
        this.eventService.getEventsByContinentId(6).subscribe((response) => {this.events = response});
        break;
      case 'Trier par continent':
        this.eventService.getEvents().subscribe((response) => {this.events = response});
        break;
    }
  }

}
