import {rutinaIntermedia } from '../localData/RutinasWiletics/rutina-intermedia';
//import {rutinaBasica } from '../localData/RutinasWiletics/rutina-basica';
import { Interval, Work } from '../models/models.index';

export class RutinasWiletics {

    public allWorksOuts: Work[] = [];
    public allInterval: Interval[] = [];

    constructor(
        //public _basica: rutinaBasica,
        public _intermedia: rutinaIntermedia
    ){

    console.log('works ' + this.allWorksOuts);

    }

    ngOnInit() {
    
       //this.allWorksOuts = _basica.WorksBasica
       console.log('works ' + this.allWorksOuts + 'asdfas');
       this.allWorksOuts.concat(this._intermedia.WorksIntermedio);
        
      }

}