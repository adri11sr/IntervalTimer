import { Component, OnInit, Input, Output} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Interval, Work } from '../../models/models.index';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.page.html',
  styleUrls: ['./workout.page.scss'],
})
export class WorkoutPage implements OnInit {

  public intervals: Interval[] = [];
  public workout: Work;

  constructor(
    private route: ActivatedRoute,
    private _timerService: TimerService,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    // Si no xiste en bbdd el workout mostramos un intevalo vacio
    var inteval:Interval = 
    {
      name:'',
      time:'00:00',
      type:'',
      workID:'1',
      orden:1
    }

    this.workout = {
      name: '',
      duration: 0,
      $key: ''
    }

    this.intervals.push(inteval);
    console.log(this.intervals);

  }

  addInterval()
  {

    console.log(this.getUltimoOrden());
    var inteval:Interval = 
    {
      name:'',
      time:'0:01',
      type:'',
      workID:'1',
      orden: this.getUltimoOrden()
    }

    this.intervals.push(inteval);
    console.log(this.intervals);
  }

  getUltimoOrden(){
    return this.intervals.length + 1;
  }

  removeInterval(orden:number){
    console.log(orden);
    const positionArray = orden - 1;
    const IntervalAux = this.intervals;
    this.intervals = [];

    IntervalAux.forEach((interval:Interval) => {
      if (interval.orden !== orden) {
        this.intervals.push(interval);
        //console.log(this.intervals);
      }
    });

  } 

  cambioIntervalo($event)
  {

    console.log($event.orden);
    console.log(this.intervals.length);

    this.intervals[$event.orden-1] = $event;

    console.log(this.intervals);

  }

  cambioWork($event)
  {

    this.workout.name = $event;

  }
  
  crearWorkout(){
    this.workout.$key = '1';
    console.log(this.workout);

    this._timerService.createWorkout(this.workout);
      

  }

}
