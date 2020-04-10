import { Injectable } from '@angular/core';
import { Interval } from '../models/interval.model';


@Injectable({
  providedIn: 'root'
})
export class TimerService {

  interval: Interval[] = [
    {
      tipo:'Prepare',
      time:'10',
      nombre:'Basic',
      _id:'1'
    },
    {
      tipo:'Work',
      time:'5',
      nombre:'Basic',
      _id:'1'
    },
    {
      tipo:'Rest',
      time:'3',
      nombre:'Basic',
      _id:'1'
    },
  ];

  constructor() { }

  getInterval(){
    return this.interval;
  }

}
