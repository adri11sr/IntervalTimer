import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Work } from '../../../models/models.index';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.scss'],
})
export class WorkoutDetailComponent implements OnInit {

  @Input() workChild: Work;
  @Output() workOutput: EventEmitter<string> = new EventEmitter();

  public name = '';
  public duration = 0;

  constructor() { }

  ngOnInit() {

    this.name = this.workChild.name;
    this.duration = this.workChild.duration;

  }

  onblur() {
    //console.log(this.name);
    this.workOutput.emit( this.name );
  }

}
