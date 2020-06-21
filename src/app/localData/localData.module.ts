import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { rutinaIntermedia } from './RutinasWiletics/rutina-intermedia';
import { rutinaBasica } from './RutinasWiletics/rutina-basica';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
  ],
  declarations: [
      rutinaIntermedia,
      rutinaBasica
    ]
})
export class LocalDataModule {}
