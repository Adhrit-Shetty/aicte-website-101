import {NgModule} from '@angular/core';
import {SharedModule} from '../../Shared/shared.module';

import {UseofictComponent} from './useofict.component';
import {educationRouting} from "app/Education/Use of ICT/education.routing";
import {UseofictStartComponent} from './useofict-start.component';
import { IctineduComponent } from './ictinedu.component';
import { MobileeduComponent } from './mobileedu.component';
import { InformationtechComponent } from './informationtech.component';

@NgModule({
  imports: [
    SharedModule,
    educationRouting
  ],
  declarations: [UseofictComponent, UseofictStartComponent, IctineduComponent, MobileeduComponent, InformationtechComponent]
})
export class EducationModule {
}
