import {Routes, RouterModule} from "@angular/router";
import {AbaicteComponent} from "./abaicte.component";
import {ActComponent} from "./act.component";
import {AbaicteStartComponent} from "./abaicte-start.component";
import {DelegationComponent} from "./delegation.component";
import {VigilanceproceduresComponent} from "./vigilanceprocedures.component";
import {OfficeproceduresComponent} from "./officeprocedures.component";
import {LegalproceduresComponent} from "./legalprocedures.component";



const ABOUTUS_ROUTES: Routes = [
  { path: '', component: AbaicteStartComponent, children: [
    { path: '', component: AbaicteComponent },
    { path: 'act', component: ActComponent },
    { path: 'delegation', component: DelegationComponent },
    { path: 'vigilance_procedures', component: VigilanceproceduresComponent },
    { path: 'office_procedures', component: OfficeproceduresComponent },
    { path: 'legal_procedures', component: LegalproceduresComponent },
  ]}
];

export const aboutusRouting = RouterModule.forChild(ABOUTUS_ROUTES);

