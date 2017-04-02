import { ModuleWithProviders, NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Temp1Component} from "../Templates/temp1.component";
import {Temp2Component} from "../Templates/temp2.component";
import {RouterModule} from "@angular/router";
import { AuthGuard } from "./Services/auth.guard";
import { AuthService } from "./Services/auth.service";

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [Temp1Component, Temp2Component],
  exports: [
    Temp1Component,
    Temp2Component
  ]
})
export class SharedModule {
  static forChild(): ModuleWithProviders {
      return {
        ngModule: SharedModule,
        providers: [ AuthGuard, AuthService ]                       //<<<====here
      };
    }
}
