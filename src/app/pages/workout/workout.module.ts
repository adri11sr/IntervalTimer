import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutPageRoutingModule } from './workout-routing.module';

import { WorkoutPage } from './workout.page';

import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { IntervalDetailComponent } from './interval-detail/interval-detail.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutPageRoutingModule
  ],
  declarations: [
    WorkoutPage,
    WorkoutDetailComponent,
    IntervalDetailComponent
  ]
})
export class WorkoutPageModule {}
