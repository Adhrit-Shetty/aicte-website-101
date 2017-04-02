import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {loginRouting} from "./login.routing";
import { AdminComponent } from './admin.component';
import {AdminStartComponent} from "./admin-start.component";
import { RegisterComponent } from './register.component';
import { AnnouncementComponent } from './announcement.component';
import { AddinstComponent } from './addinst.component';
import { AddinstyComponent } from './addinsty.component';
import { UpdinstyComponent } from './updinsty.component';
import { UpdinstComponent } from './updinst.component';
import { AuthService } from "../../Shared/Services/auth.service";
import { AuthGuard } from "../../Shared/Services/auth.guard";
import { SharedModule } from "../../Shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    loginRouting
  ],
  declarations: [
    AdminComponent,
    AdminStartComponent,
    RegisterComponent, AnnouncementComponent,
    AddinstComponent,
    AddinstyComponent,
    UpdinstyComponent,
    UpdinstComponent
  ],
  providers: []
})
export class LoginModule { }
