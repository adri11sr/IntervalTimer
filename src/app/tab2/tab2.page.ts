import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TimerService } from '../services/timer.service';
import { Interval, Work } from '../models/models.index';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  works: Work[] = [];

  constructor(
    private _TimerService: TimerService,
    private router: Router
  ) {
    let worksRes = this._TimerService.getListWorksFB();
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
    })
  }

  editWork(key){
    console.log('edit: ' + key);
  }

  deleteWork(key){
    console.log('delete: ' + key);
    
    /*this._TimerService.deleteWorkout(key).then(() => {
      console.log('Documento eliminado!');
    }, (error) => {
      console.error(error);
    });*/
    
  }

  CrearWorkout(){
    console.log('ALVARO CAMPILLO, PEDRO CARRERA BASTOS');
    //this.router.navigate(['/heroes', { id: itemId }]);
    this.router.navigate(['/workout/'+0]);
  }

}
