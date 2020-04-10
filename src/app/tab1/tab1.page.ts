import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TimerService } from '../services/timer.service';
import { Interval } from '../models/interval.model';

const circleR = 80;
const circleDasharray = 2 * Math.PI * circleR;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  time: BehaviorSubject<string> = new BehaviorSubject('00:00');  
  percent: BehaviorSubject<number> = new BehaviorSubject(100);

  timer: number;
  interval;

  intervalBD: Interval[] = [];

  state: 'start' | 'stop' = 'stop';
  startDuration = 1;
  totalDuration = 1;
  numIntervalsInput = 0;
  numIntervalsDefault = 1;

  tipo = 'a';

  indexInterval = 0;

  circleR = circleR;
  circleDasharray = circleDasharray;

  constructor(
    private _TimerService: TimerService
  ) {}
  

  ngOnInit() {

    this.getInterval();
    this.numIntervalsDefault = this.intervalBD.length;
    this.startDuration = +this.intervalBD[this.indexInterval].time;
    this.tipo = this.intervalBD[this.indexInterval].tipo;
    console.log(this.numIntervalsDefault + '-' +  this.startDuration);
  }


  getInterval(){
    this.intervalBD = this._TimerService.getInterval();
  }


  startProcess(){
    if (this.numIntervalsInput > 0){

      this.numIntervalsDefault = this.numIntervalsInput;
    }
    this.starTimer(this.startDuration);
  }

  starTimer(duration: number) {
    this.state = 'start';
    clearInterval(this.interval);
    this.timer = duration * this.totalDuration;
    this.updateTimeValue();
    this.interval = setInterval(()=> {
      this.updateTimeValue();
    }, 1000);

  }

  stopTimer(){
    clearInterval(this.interval);
    this.time.next('00:00');
    this.state = 'stop';
    this.percent.next(100);
    this.numIntervalsDefault = this.intervalBD.length;
  }

  percentageOffset(percent){
    const percentFloat = percent /100;
    return circleDasharray * (1 - percentFloat);
  }

  swapDuration(){
    this.startDuration = this.startDuration === 1 ? 0.5 : 1;
  }

  updateTimeValue(){

    let minutes: any = this.timer/60;
    let seconds: any = this.timer%60;

    minutes = String('0' + Math.floor(minutes)).slice(-2);
    seconds = String('0' + Math.floor(seconds)).slice(-2);

    const text = minutes + ':' + seconds;
    this.time.next(text);

    const totalTime = this.startDuration * this.totalDuration;
    const percentage = ((totalTime - this.timer) / totalTime) * 100;
    this.percent.next(percentage);

    --this.timer;
    if (this.timer < -1) {
      --this.numIntervalsDefault;
      console.log(this.numIntervalsDefault);
      if(this.numIntervalsDefault < 1){
        this.stopTimer();
        console.log('StopTimer');
      } else{
        this.startDuration = +this.intervalBD[++this.indexInterval].time;
        this.tipo = this.intervalBD[this.indexInterval].tipo;
        this.starTimer(this.startDuration);     
      }
    }

  }

}
