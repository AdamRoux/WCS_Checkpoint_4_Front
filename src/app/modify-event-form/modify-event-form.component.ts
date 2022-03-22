import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Continent } from '../shared/models/Continent.model';
import { Event } from '../shared/models/Event.model';
import { ContinentService } from '../shared/services/continent.service';
import { EventService } from '../shared/services/event.service';

@Component({
  selector: 'app-modify-event-form',
  templateUrl: './modify-event-form.component.html',
  styleUrls: ['./modify-event-form.component.sass']
})
export class ModifyEventFormComponent implements OnInit {
  createEventForm: FormGroup;
  continents: Continent[] | undefined;
  showNotification: boolean = false;
  event: Event | undefined;

  constructor(private fb: FormBuilder, private continentService: ContinentService, private eventService: EventService, private router: Router,private route: ActivatedRoute) {
    this.createEventForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      place: ['', Validators.required],
      date: ['', Validators.required],
      continentId: ['', Validators.required],
      pictures: ['', Validators.required]
    })
   }

  ngOnInit(): void {
    this.continentService.getContinents().subscribe((response: Continent[]) => {
      this.continents = response;
    })
    this.route.params.subscribe((params) => {
      this.eventService.getEventById(params['id']).subscribe((response: Event) => {
        this.event = response;
        console.log(response.date);
        const d = response.date.toString().substring(0, 10);
        const photos: string[] = [];
        response.pictures.forEach(picture => {
        photos.push(picture.url);
        });
        this.createEventForm = this.fb.group({
          title: [response.title, Validators.required],
          description: [response.description, Validators.required],
          place: [response.place, Validators.required],
          date: [d, Validators.required],
          continentId: [response.continentId.id, Validators.required],
          pictures: [photos]
        })
      })
    })
  }

  onSubmit() {
    console.log('title : ' + this.createEventForm.controls['title'].value)
    console.log('description : ' + this.createEventForm.controls['description'].value)
    console.log('place : ' + this.createEventForm.controls['place'].value)
    const array: string[] = this.createEventForm.controls['date'].value.split('-')
    console.log('date : ' + array.join("/"));
    console.log('continentId : ' + this.createEventForm.controls['continentId'].value)
    console.log('pictures : ' + this.createEventForm.controls['pictures'].value)

    const formData: FormData = new FormData();
    formData.append('title', this.createEventForm.controls['title'].value);
    formData.append('description', this.createEventForm.controls['description'].value);
    formData.append('place', this.createEventForm.controls['place'].value);
    formData.append('date', array.join("/"));
    formData.append('continentId', this.createEventForm.controls['continentId'].value);
    formData.append('pictures', this.createEventForm.controls['pictures'].value);

    this.route.params.subscribe((params) => {
        this.eventService.modifyEventById(params['id'] ,formData).subscribe((response) => {
      console.log(response);
    },
    (error) => {
      if(error.status == 200) {
        this.navigateToHomePage();
      }
      else this.showNotification = true;
    });
    })
  }

  navigateToHomePage() {
    this.router.navigateByUrl("/");
  }
}
