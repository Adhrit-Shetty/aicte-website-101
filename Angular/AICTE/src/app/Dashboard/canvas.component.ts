import { Component, DoCheck, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LoadService } from "./load.service";

@Component({
  selector: 'aicte-canvas',
  template: `
    <div *ngIf = "loadCanvas">
      CHECK
      <canvas baseChart *ngIf = "loaded"
              [datasets]="barChartData"
              [labels]="barChartLabels"
              [options]="barChartOptions"
              [legend]="barChartLegend"
              [chartType]='"bar"'
              style = "display:block; width:100%;">
      </canvas>
    </div>
  `,
  styles: []
})

export class CanvasComponent implements OnInit, DoCheck {
  barChartData: any[] = [];
  barChartLabels: any[] = [];
  barChartOptions= {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLegend:boolean = true;
  @Input() loadCanvas:boolean;
  loaded: boolean = false;
  
  constructor(private load: LoadService) {
  }
  
  ngOnInit() {
  
  }
  
  ngDoCheck() {
    if(this.loadCanvas == false) {
      console.log("DO!");
      this.barChartData = [];
      this.barChartLabels = [];
      this.loaded = false;
    }
    
    if((this.loadCanvas == true) && (this.loaded == false)) {
      this.barChartData = this.load.data();
      this.barChartLabels = this.load.labels();
      console.log("DO2");
    }
    
    if((this.barChartLabels.length !== 0) && (this.barChartData.length !== 0)) {
      console.log("LOADED");
      this.loaded = true;
    }
  }
}
