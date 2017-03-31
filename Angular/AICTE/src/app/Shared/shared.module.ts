import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Temp1Component} from "../Templates/temp1.component";
import {Temp2Component} from "../Templates/temp2.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [ Temp1Component, Temp2Component ],
  exports: [
    Temp1Component,
    Temp2Component
  ]
})
export class SharedModule { }
