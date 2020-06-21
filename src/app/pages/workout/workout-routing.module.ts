import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';


import { WorkoutPage } from './workout.page';

const routes: Routes = [
  {
    path: '',
    component: WorkoutPage
  },
  { path: 'workout/:id', component: WorkoutDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutPageRoutingModule {}
