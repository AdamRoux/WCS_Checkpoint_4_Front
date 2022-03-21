import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Continent } from '../shared/models/Continent.model';
import { ContinentService } from '../shared/services/continent.service';
import { EventService } from '../shared/services/event.service';


@Component({
  selector: 'app-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.sass']
})
export class AddEventFormComponent implements OnInit {
  createEventForm: FormGroup;
  continents: Continent[] | undefined;

  constructor(private fb: FormBuilder, private continentService: ContinentService, private eventService: EventService) {
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

    this.eventService.createEvent(formData).subscribe();


    
  }

}
