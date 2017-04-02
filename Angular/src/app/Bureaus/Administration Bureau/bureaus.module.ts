import {NgModule} from '@angular/core';
import {SharedModule} from "../../Shared/shared.module";

import {bureausRouting} from "./bureaus.routing";
import {AdminbComponent} from "./adminb.component";
import {AdminbStartComponent} from './adminb-start.component';
import { CouncilComponent } from './council.component';
import { CourtComponent } from './court.component';
import { ExecutivecommitteeComponent } from './executivecommittee.component';
import { RegionalComponent } from './regional.component';


@NgModule({
  imports: [bureausRouting, SharedModule],
  exports: [],
  declarations: [AdminbComponent, AdminbStartComponent, CouncilComponent, CourtComponent, ExecutivecommitteeComponent, RegionalComponent],
  providers: [],
})
export class BureausModule {
}

