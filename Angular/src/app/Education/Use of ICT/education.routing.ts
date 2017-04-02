import {Routes, RouterModule} from "@angular/router";
import {UseofictComponent} from "./useofict.component";
import {UseofictStartComponent} from "app/Education/Use of ICT/useofict-start.component";
import {IctineduComponent} from "./ictinedu.component";
import {MobileeduComponent} from "./mobileedu.component";
import {InformationtechComponent} from "./informationtech.component";


const EDUCATION_ROUTES: Routes = [
  {
    path: '', component: UseofictStartComponent, children: [
    {path: '', component: UseofictComponent},
    {path: 'ict_in_education', component: IctineduComponent},
    {path: 'mobile_internet', component: MobileeduComponent},
    {path: 'information_technology', component: InformationtechComponent},
   ]
  }
];

export const educationRouting = RouterModule.forChild(EDUCATION_ROUTES);

