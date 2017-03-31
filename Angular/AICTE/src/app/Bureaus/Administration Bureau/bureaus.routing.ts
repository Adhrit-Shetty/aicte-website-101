import {Routes, RouterModule} from "@angular/router";
import {AdminbComponent} from "./adminb.component";
import {AdminbStartComponent} from "app/Bureaus/Administration Bureau/adminb-start.component";


const BUREAUS_ROUTES: Routes = [
  { path: '', component: AdminbStartComponent, children: [
    { path: '', component: AdminbComponent },
  ]}
];

export const bureausRouting = RouterModule.forChild(BUREAUS_ROUTES);

