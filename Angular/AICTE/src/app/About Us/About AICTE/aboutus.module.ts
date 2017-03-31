import { NgModule } from '@angular/core';
import {SharedModule} from "app/Shared/shared.module";

import { aboutusRouting } from "./aboutus.routing";
import { ActComponent } from './act.component';
import { AbaicteComponent } from './abaicte.component';
import { AbaicteStartComponent } from './abaicte-start.component';
import { DelegationComponent } from './delegation.component';
import { LegalproceduresComponent } from './legalprocedures.component';
import { VigilanceproceduresComponent } from './vigilanceprocedures.component';
import { OfficeproceduresComponent } from './officeprocedures.component';



@NgModule({
    imports: [aboutusRouting, SharedModule],
    exports: [],
    declarations: [ActComponent,AbaicteComponent, AbaicteStartComponent, DelegationComponent, LegalproceduresComponent, VigilanceproceduresComponent, OfficeproceduresComponent],
    providers: [],
})
export class AboutusModule { }

