import { Injectable } from '@angular/core';
import { Interval, Work } from '../models/models.index';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  interval5: Interval[] = [
    {
      type:'Prepare',
      time:'20',
      name:'Prepare',
      workID:'1'
    }
  ];

  // 926262210

  worksListRef: AngularFireList<any>;
  worksRef: AngularFireObject<any>;

  private workCollection: AngularFirestoreCollection<Work>;

  intervalsListRef: AngularFireList<any>; 
  intervalsRef: AngularFireObject<any>;

  constructor(
    private db: AngularFireDatabase,
    private firestore: AngularFirestore
    ) { }

  getInterval(){
    return this.interval5;                                                                                           
  }

  getIntervalByWorkID(id: string){

    this.intervalsListRef = this.db.list('/intervals', ref => ref.orderByChild('workID').equalTo(+id))
    
    return this.intervalsListRef;
  }

  getListWorksFB(){
    this.worksListRef = this.db.list('/works');
    return this.worksListRef;
  }

  createWorkout(workout: Work){

    let workRef = this.firestore.collection('works').add({
      name: 'Tokyo',
      duration: '0'
    }).then(ref => {
      console.log('Added document with ID: ', ref.id);
    });
    //return this.workCollection.add(workout);
    /*return this.worksListRef.push({
      name: workout.name,
      duration: workout.duration,
    })*/

  }

  insertInterval(intervals: [Interval]){

  }

  // Delete
  deleteWorkout(id: string) {
    this.worksRef = this.db.object('/appointment/' + id);
    this.worksRef.remove();
  }

}
