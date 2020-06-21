import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TimerService } from '../services/timer.service';
import { Interval, Work } from '../models/models.index';
import { DOCUMENT } from '@angular/common';

import {rutinaIntermedia } from '../localData/RutinasWiletics/rutina-intermedia';
import {RutinasWiletics } from '../localData/rutinas.index';
import { rutinaBasica } from '../localData/RutinasWiletics/rutina-basica';
import { rutinaAvanzada } from '../localData/RutinasWiletics/rutina-avazada';

const circleR = 80;
const circleDasharray = 2 * Math.PI * circleR;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  works: Work[] = [];
  // works: Work[] = [
  //   {
  //     name: 'Comba 1',
  //     _id: '1'
  //   },
  //   {
  //     name: 'Comba 2',
  //     _id: '2'
  //     },
  //   {
  //     name: 'Comba 3',
  //     _id: '3'
  //   }
  //];

  public allInterval: Interval[][] = [];

  time: BehaviorSubject<string> = new BehaviorSubject('00:00');  
  percent: BehaviorSubject<number> = new BehaviorSubject(100);

  timer: number;
  interval;

  intervalBD: Interval[] = [];

  state: 'start' | 'stop' | 'resume' = 'stop';
  startDuration = 1;
  totalDuration = 1;
  numIntervalsDefault = 1;

  colorPrepare1 = '#ECBF09';
  colorPrepare2 = '#FFE788 ';
  colorWork1 = '#23AA1E';
  colorWork2 = '#87F783 ';
  colorRest1 = '#C6402D';
  colorRest2 = '#F7A195 ';

  type = 'a';
  name;

  urlSoundFinal = '../../assets/sounds/28053__erdie__wooden02.wav';
  urlSound321 = '../../assets/sounds/28260__erdie__wooden05.ogg';

  indexInterval = 0;

  reproduciendo = true;

  circleR = circleR;
  circleDasharray = circleDasharray;

  public work:Work; 

  constructor(
    private _TimerService: TimerService,
    @Inject(DOCUMENT) document,
    public _basica: rutinaBasica,
    public _intermedia: rutinaIntermedia,
    public _avanzada: rutinaAvanzada
  ) {}
  

  ngOnInit() {
    
    this.getInterval()
    this.configInterval();
    this.getListWorkouts();
    
  }

  getListWorkouts() {

    /*let worksRes = this._TimerService.getListWorksFB();
    worksRes.snapshotChanges().subscribe(res => {
      this.works = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        console.log(a);
        console.log(item);
        a['$key'] = item.key;
        this.works.push(a as Work);
        console.log('works ' + this.works);
      })
    })*/

    this.works = this._basica.WorksBasica.concat(this._intermedia.WorksIntermedio).concat(this._avanzada.WorksAvanzado);
    this.allInterval = this._intermedia.works.concat(this._basica.works).concat(this._avanzada.works);
    console.log('intervals ' + this.allInterval + 'dfafd' + this.allInterval);
    console.log('works ' + this.works);

  }

  configInterval() {
    //this.getInterval();
    this.indexInterval = 0;
    this.numIntervalsDefault = this.intervalBD.length;
    this.startDuration = +this.intervalBD[this.indexInterval].time;
    this.type = this.intervalBD[this.indexInterval].type;
    this.name = this.intervalBD[this.indexInterval].name;
    console.log(this.numIntervalsDefault + '-' +  this.startDuration);
    this.setColorCircle();
  }

  getInterval(){
    this.intervalBD = this._TimerService.getInterval();
  }

  startProcess(){
    this.starTimer(this.startDuration);
  }

  pauseTimer() {

    this.state = 'resume';
    clearInterval(this.interval);

  }

  resumeTimer() {
    this.state = 'start';
    this.starTimer(this.timer)
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
    this.indexInterval = 0;
    this.configInterval();
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

    if(this.timer <= 3 && this.timer > 0) {
      this.reproducir(this.urlSound321);
    }else if (this.timer == 0) {
      this.reproducir(this.urlSoundFinal);
    }

    --this.timer;
    if (this.timer < -1) {
      --this.numIntervalsDefault;
      console.log(this.numIntervalsDefault);
      if(this.numIntervalsDefault < 1){
        this.stopTimer();
        console.log('StopTimer');
      } else{
        this.startDuration = +this.intervalBD[++this.indexInterval].time;
        this.setColorCircle();
        this.type = this.intervalBD[this.indexInterval].type;
        this.name = this.intervalBD[this.indexInterval].name;        
        this.starTimer(this.startDuration);     
      }
    }

  }

  setColorCircle() {

    switch(this.intervalBD[this.indexInterval].type){
      case 'Prepare': {  
        let color1 = document.getElementById('color-1');
        color1.setAttribute('stop-color', this.colorPrepare1);

        let color2 = document.getElementById('color-2');
        color2.setAttribute('stop-color', this.colorPrepare2);

        break;
      }
      case 'work': {  
        let color1 = document.getElementById('color-1');
        color1.setAttribute('stop-color', this.colorWork1);

        let color2 = document.getElementById('color-2');
        color2.setAttribute('stop-color', this.colorWork2);

        break;
      }
      case 'Rest': {  
        let color1 = document.getElementById('color-1');
        color1.setAttribute('stop-color', this.colorRest1);

        let color2 = document.getElementById('color-2');
        color2.setAttribute('stop-color', this.colorRest2);

        break;
      } 
      default: {
        break;
      }
    }

  }

  reproducir (audioIn) {
    
    console.log(audioIn);

    let audio = new Audio();

    audio.src = audioIn;
    this.reproduciendo = true;
    audio.load();
    audio.play();

    setTimeout(() => {
      this.reproduciendo = false;
    }, 1000);

  }

  onChange(id: string) {

    console.log('id = '+ id);

    this.intervalBD = this.allInterval[+id-1];
    this.configInterval();
    console.log(this.intervalBD);   

  }

  setIntevalByID_firebase(id: string){

     /* this._TimerService.getIntervalByWorkID(id).valueChanges().subscribe(res => {
      console.log('o ' + res.name);
    }); */

    let intervalsRes = this._TimerService.getIntervalByWorkID(id);
    intervalsRes.snapshotChanges().subscribe(res => {
      this.intervalBD = [];
      // let a = res[0].payload.toJSON();
      // console.log(a);
      res.forEach(item => {
        let a = item.payload.toJSON();
        console.log(a);
        console.log(item);
        a['$key'] = item.key;
        this.intervalBD.push(a as Interval);
        console.log('intervals ' + this.intervalBD);
        this.configInterval();
      })
    });

  }

  setIntevalByID_Local (id: string){

    

  }

}
