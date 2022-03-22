import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventFormComponent } from './add-event-form/add-event-form.component';
import { EventComponent } from './event/event.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ModifyEventFormComponent } from './modify-event-form/modify-event-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'add-event',
    component: AddEventFormComponent,
  },
  {
    path: 'event/:id',
    component: EventComponent,
  },
  {
    path: 'event/:id/modify',
    component: ModifyEventFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
