import {Routes, RouterModule} from "@angular/router";
import {UseofictComponent} from "./useofict.component";
import {UseofictStartComponent} from "app/Education/Use of ICT/useofict-start.component";


const EDUCATION_ROUTES: Routes = [
  { path: '', component: UseofictStartComponent, children: [
    { path: '', component: UseofictComponent },
  ]}
];

export const educationRouting = RouterModule.forChild(EDUCATION_ROUTES);

