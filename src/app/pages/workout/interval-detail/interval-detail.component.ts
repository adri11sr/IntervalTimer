import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Interval } from '../../../models/models.index';

@Component({
  selector: 'app-interval-detail',
  templateUrl: './interval-detail.component.html',
  styleUrls: ['./interval-detail.component.scss'],
})
export class IntervalDetailComponent implements OnInit {

  @Input() intervalChild: Interval;
  @Output() IntervalOutput: EventEmitter<Interval> = new EventEmitter();

  name: string = '';
  type: string = '';
  orden: number = 0;
  timeM: number = 0;
  timeS: number = 0;
  intervalOut: Interval = {
    name: '',
    type:'',
    time: '',
    orden:0,
    workID:''
  };
  state: 'visible' | 'noVisible' = 'noVisible';

  constructor() { }

  ngOnInit() {
    
    this.state = 'noVisible';
    this.name =  this.intervalChild.name;
    this.intervalOut.name = this.intervalChild.name;
    this.type = this.intervalChild.type;
    this.intervalOut.type = this.intervalChild.type;
    this.intervalOut.time = this.intervalChild.time;
    let timeDisplay = this.obtenerTime(this.intervalChild.time);
    this.timeM = timeDisplay[0];
    this.timeS = timeDisplay[1];
    this.orden = this.intervalChild.orden;
    this.intervalOut.orden = this.intervalChild.orden;

  }

  onChanges($event) {

    this.state = 'visible';
    
  }

  summitChanges(newName: string, newType: string, newTimeM:number, newTimeS:number){

    this.state = 'noVisible';
      
    this.intervalOut.name = newName;
    this.intervalOut.type = newType;
    
    this.intervalOut.time = this.fotmatearTime(newTimeM,newTimeS);
 
    console.log(this.intervalOut);
 
    this.IntervalOutput.emit( this.intervalOut );

  }

  obtenerSegundosIntervalo(time){

    console.log(time.toString().slice(15,19));
    let timeString = time.toString().slice(15,19);
    return timeString

  }

  fotmatearTime(timeM,timeS){

    let timeMString = timeM;
    let timeSString = timeS;

    if (timeM < 10){
      timeMString = '0'+timeM;
    }
    if (timeS < 10){
      timeSString = '0'+timeS
    }

    console.log(timeMString+':'+timeSString);
    return timeMString+':'+timeSString;

  }

  obtenerTime (timeString) {
    let timeStringDividido = timeString.split(':',2);
    console.log('split[0]: ' + timeStringDividido[0] + ' ; ' + 'split[1]: ' + timeStringDividido[1]);
    let minutosSegundos = +timeStringDividido[0]*60;
    let segundos = minutosSegundos + +timeStringDividido[1];
    console.log(timeStringDividido);

    return timeStringDividido;
  }

}
