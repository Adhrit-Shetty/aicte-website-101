import { NgModule } from '@angular/core';

import { SharedModule } from '../../Shared/shared.module';
import { UseofictComponent } from './useofict.component';
import {educationRouting} from "app/Education/Use of ICT/education.routing";
import { UseofictStartComponent } from './useofict-start.component';

@NgModule({
  imports: [
    SharedModule,
    educationRouting
  ],
  declarations: [UseofictComponent, UseofictStartComponent]
})
export class EducationModule { }
