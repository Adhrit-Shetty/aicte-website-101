import {Routes, RouterModule} from "@angular/router";
import {AdminbComponent} from "./adminb.component";
import {AdminbStartComponent} from "app/Bureaus/Administration Bureau/adminb-start.component";
import {CouncilComponent} from "./council.component";
import {CourtComponent} from "./court.component";
import {RegionalComponent} from "./regional.component";
import {ExecutivecommitteeComponent} from "./executivecommittee.component";


const BUREAUS_ROUTES: Routes = [
  {
    path: '', component: AdminbStartComponent, children: [
    {path: '', component: AdminbComponent},
    {path: 'council', component: CouncilComponent},
    {path: 'court', component: CourtComponent},
    {path: 'executive_committee', component: ExecutivecommitteeComponent},
    {path: 'regional', component: RegionalComponent},

    ]
  }
];

export const bureausRouting = RouterModule.forChild(BUREAUS_ROUTES);

