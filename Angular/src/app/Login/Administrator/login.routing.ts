import {Routes, RouterModule} from "@angular/router";

import {AdminStartComponent} from "./admin-start.component";
import {AdminComponent} from "./admin.component";
import {RegisterComponent} from "./register.component";
import {AnnouncementComponent} from "./announcement.component";
import {AddinstyComponent} from "./addinsty.component";
import {AddinstComponent} from "./addinst.component";
import {UpdinstComponent} from "./updinst.component";
import {UpdinstyComponent} from "./updinsty.component";
import { AuthGuard } from "../../Shared/Services/auth.guard";


const LOGIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminStartComponent,
    canActivateChild: [AuthGuard],
    children: [
      {path: '', component: AdminComponent},
      {path: 'add_announcements', component: AnnouncementComponent},
      {path: 'add_new_institution_data', component: AddinstComponent},
      {path: 'add_new_institution_data_for _year', component: AddinstyComponent},
      {path: 'update_institution_data', component: UpdinstComponent},
      {path: 'update_institution_data_for_year', component: UpdinstyComponent},
      {path: 'register', component: RegisterComponent},
    ]
  }
];

export const loginRouting = RouterModule.forChild(LOGIN_ROUTES);

