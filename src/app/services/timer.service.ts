import { Injectable } from '@angular/core';
import { Interval, Work } from '../models/models.index';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  interval1: Interval[] = [
    {
      type:'Prepare',
      time:'20',
      name:'Basic',
      workID:'2'
    },
    {
      type:'Work',
      time:'120',
      name:'Basic',
      workID:'2'
    },
    {
      type:'Rest',
      time:'30',
      name:'Basic',
      workID:'2'
    },
    {
      type:'Work',
      time:'120',
      name:'Basic',
      workID:'2'
    },
    {
      type:'Rest',
      time:'30',
      name:'Basic',
      workID:'2'
    },
    {
      type:'Work',
      time:'120',
      name:'Basic',
      workID:'2'
    },
    {
      type:'Rest',
      time:'60',
      name:'Basic',
      workID:'2'
    },
    {
      type:'Work',
      time:'120',
      name:'Basic',
      workID:'2'
    },
    {
      type:'Rest',
      time:'30',
      name:'Basic',
      workID:'2'
    },
    {
      type:'Work',
      time:'180',
      name:'Basic',
      workID:'2'
    },
    {
      type:'Rest',
      time:'30',
      name:'Basic',
      workID:'2'
    },
    {
      type:'Work',
      time:'180',
      name:'Basic',
      workID:'2'
    },
    {
      type:'Rest',
      time:'60',
      name:'Basic',
      workID:'2'
    },
  ];


  interval: Interval[] = [
    {
      type:'Prepare',
      time:'20',
      name:'Prepare',
      workID:'1'
    },
    {
      name:'Apertura Frontal',
      time:'60',
      type:'work',
      workID:'1'
    },
    {
      name:'Rest',
      time:'30',
      type:'Rest',
      workID:'1'
    },
    {
      name:'Apertura Lateral',
      time:'60',
      type:'work',
      workID:'1'
    },
    {
      name:'Rest',
      time:'60',
      type:'Rest',
      workID:'1'
    },
    {
      name:'Apertura Frontal',
      time:'120',
      type:'work',
      workID:'1'
    },
    {
      name:'Rest',
      time:'30',
      type:'Rest',
      workID:'1'
    },
    {
      name:'Apertura Lateral',
      time:'120',
      type:'work',
      workID:'1'
    },
    {
      name:'Rest',
      time:'60',
      type:'Rest',
      workID:'1'
    },
    {
      name:'Toques Talon RPS',
      time:'30',
      type:'work',
      workID:'1'
    },
    {
      name:'Rest',
      time:'60',
      type:'Rest',
      workID:'1'
    },
    {
      name:'Semi-Apertura frotal RPS',
      time:'30',
      type:'work',
      workID:'1'
    },
    {
      name:'Rest',
      time:'60',
      type:'Rest',
      workID:'1'
    },
    {
      name:'Apertura Frontal RPS',
      time:'30',
      type:'work',
      workID:'1'
    }
    ,
    {
      name:'Rest',
      time:'60',
      type:'Rest',
      workID:'1'
    },
    {
      name:'Toques Talon RPS',
      time:'30',
      type:'work',
      workID:'1'
    },
    {
      name:'Rest',
      time:'60',
      type:'Rest',
      workID:'1'
    },
    {
      name:'Semi-Apertura frotal RPS',
      time:'30',
      type:'work',
      workID:'1'
    },
    {
      name:'Rest',
      time:'60',
      type:'Rest',
      workID:'1'
    },
    {
      name:'Apertura Frontal RPS',
      time:'30',
      type:'work',
      workID:'1'
    }
  ];

  interval4: Interval[] = [
    {
      type:'Prepare',
      time:'20',
      name:'Prepare',
      workID:'1'
    },
    {
      name:'Toques Talon',
      time:'60',
      type:'work',
      workID:'1'
    },
    {
      name:'Rest',
      time:'30',
      type:'Rest',
      workID:'1'
    },
    {
      name:'Semi-Apertura frotal',
      time:'60',
      type:'work',
      workID:'1'
    },
    {
      name:'Rest',
      time:'60',
      type:'Rest',
      workID:'1'
    },
    {
      name:'Toques Talon',
      time:'180',
      type:'work',
      workID:'1'
    },
    {
      name:'Rest',
      time:'30',
      type:'Rest',
      workID:'1'
    },
    {
      name:'Semi-Apertura frotal',
      time:'180',
      type:'work',
      workID:'1'
    },
    {
      name:'Rest',
      time:'60',
      type:'Rest',
      workID:'1'
    },
    {
      name:'Pies Alternos RPS',
      time:'30',
      type:'work',
      workID:'1'
    },
    {
      name:'Rest',
      time:'60',
      type:'Rest',
      workID:'1'
    },
    {
      name:'Rodillas arriba RPS',
      time:'30',
      type:'work',
      workID:'1'
    },
    {
      name:'Rest',
      time:'60',
      type:'Rest',
      workID:'1'
    },
    {
      name:'Talones atrás RPS',
      time:'30',
      type:'work',
      workID:'1'
    }
    ,
    {
      name:'Rest',
      time:'60',
      type:'Rest',
      workID:'1'
    },
    {
      name:'Pies Alternos RPS',
      time:'30',
      type:'work',
      workID:'1'
    },
    {
      name:'Rest',
      time:'60',
      type:'Rest',
      workID:'1'
    },
    {
      name:'Rodillas arriba RPS',
      time:'30',
      type:'work',
      workID:'1'
    },
    {
      name:'Rest',
      time:'60',
      type:'Rest',
      workID:'1'
    },
    {
      name:'Talones atrás RPS',
      time:'30',
      type:'work',
      workID:'1'
    }
  ];


  interval2: Interval[] = [
    {
      type:'Prepare',
      time:'20',
      name:'Prepare',
      workID:'3'
    },
    {
      name:'Toques Talon',
      time:'60',
      type:'work',
      workID:'3'
    },
    {
      name:'Rest',
      time:'30',
      type:'Rest',
      workID:'3'
    },
    {
      name:'Semi-Apertura frotal',
      time:'60',
      type:'work',
      workID:'3'
    },
    {
      name:'Rest',
      time:'60',
      type:'Rest',
      workID:'3'
    },
    {
      name:'Toques Talon',
      time:'120',
      type:'work',
      workID:'3'
    },
    {
      name:'Rest',
      time:'30',
      type:'Rest',
      workID:'3'
    },
    {
      name:'Semi-Apertura frotal',
      time:'120',
      type:'work',
      workID:'3'
    },
    {
      name:'Rest',
      time:'60',
      type:'Rest',
      workID:'3'
    },
    {
      name:'Sencillos RPS',
      time:'30',
      type:'work',
      workID:'3'
    },
    {
      name:'Rest',
      time:'60',
      type:'Rest',
      workID:'3'
    },
    {
      name:'Pies Alternos RPS',
      time:'30',
      type:'work',
      workID:'3'
    },
    {
      name:'Rest',
      time:'60',
      type:'Rest',
      workID:'3'
    },
    {
      name:'Rodillas arriba RPS',
      time:'30',
      type:'work',
      workID:'3'
    }
    ,
    {
      name:'Rest',
      time:'60',
      type:'Rest',
      workID:'3'
    },
    {
      name:'Sencillos RPS',
      time:'30',
      type:'work',
      workID:'3'
    },
    {
      name:'Rest',
      time:'60',
      type:'Rest',
      workID:'3'
    },
    {
      name:'Pies Alternos RPS',
      time:'30',
      type:'work',
      workID:'3'
    },
    {
      name:'Rest',
      time:'60',
      type:'Rest',
      workID:'3'
    },
    {
      name:'Rodillas arriba RPS',
      time:'30',
      type:'work',
      workID:'3'
    }
  ];

  // 926262210

  worksListRef: AngularFireList<any>;
  worksRef: AngularFireObject<any>;


  intervalsListRef: AngularFireList<any>; 
  intervalsRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  getInterval(){
    return this.interval;
  }

  getIntervalByWorkID(id: string){

    this.intervalsListRef = this.db.list('/intervals', ref => ref.orderByChild('workID').equalTo(+id))
    
    return this.intervalsListRef;
  }

  getListWorksFB(){
    this.worksListRef = this.db.list('/works');
    return this.worksListRef;
  }

}
