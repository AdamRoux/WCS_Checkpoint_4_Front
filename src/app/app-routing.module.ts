import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventFormComponent } from './add-event-form/add-event-form.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'add-event',
    component: AddEventFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
