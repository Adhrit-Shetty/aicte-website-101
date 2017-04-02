import {Component, OnInit, ViewChild} from '@angular/core';

import {HttpService} from "../Shared/Services/http.service";
import {Dataset, College} from "./chart";
import {LoadService} from "./load.service";
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'aicte-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [HttpService, LoadService]
})

export class DashboardComponent {
  //Declaring process variables
  name: string;
  //Declaring Canvas variables
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  barChartData: any[] = [];
  barChartLabels: any[] = [];
  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: {
        0: {
          ticks: {
            beginAtZero: true
          }
        }
      }
    }
  };
  barChartLegend: boolean = true;
  loaded: boolean = false;
  loadCanvas = false;
  collegeData: boolean = false;
  collegenames: string[] = [];
  presentcollege = "";
  //Declaring main variables
  data: any;
  labels: string[] = [];
  intake: number[] = [];
  enrolled: number[] = [];
  passed: number[] = [];
  placed: number[] = [];
  datasets: Dataset[] = [];
  colleges: College[] = [];
  insttype: string;
  minority: boolean;
  women: boolean;
  ApprovalStatus: string;
  //Form variables
  myForm: FormGroup;
  formStatus: any;
  request: any;
  
  constructor(private http: HttpService, private load: LoadService, private formBuilder: FormBuilder) {
    //Preloading generalised chart
    this.initial();
    //Form controls
    this.myForm = formBuilder.group({
      'name': [''],
      'insttype': [''],
      'minority': [''],
      'women': [''],
      'ApprovalStatus': [''],
      'year': [''],
      'colleges': ['']
    });
  }
  @ViewChild('select') select;
  
  
  initial() {
    this.http.startDashboard()
      .subscribe(
        (data) => {
          this.data = data;
          console.log(data);
          for (let year in data) {
            this.labels.push(this.data[year].y);
            this.intake.push(this.data[year].intake);
            this.enrolled.push(this.data[year].enrolled);
            this.passed.push(this.data[year].passed);
            this.placed.push(this.data[year].placed);
          }
          this.datasets.push(new Dataset(this.intake, "Intake"));
          this.datasets.push(new Dataset(this.enrolled, "Enrolled"));
          this.datasets.push(new Dataset(this.passed, "Passed"));
          this.datasets.push(new Dataset(this.placed, "Placed"));
          this.load.initial(this.datasets, this.labels);
          this.loadCanvas = true;
          this.loadCollege();
        }
      );
    //this.loaded = true;
  }
  
  onSubmit(data: any) {
    this.hardReset();
    console.log(data);
    this.request = {
      institute: {
        name: data.name,
        insttype: data.insttype,
        minority: data.minority,
        women: data.women,
        ApprovalStatus: data.ApprovalStatus,
      },
      year: {
        y: data.year
      }
    }
    console.log(this.request);
    //this.myForm.reset();
    this.makeCanvas(this.request);
  }
  
  makeCanvas(request: any) {
    this.http.queryDashboard(request)
      .subscribe(
        (data) => {
          console.log(data);
          this.colleges = [];
          if (data !== null) {
            for (let college in data) {
              console.log(college);
              this.Reset();
              for (let year of data[college]) {
                this.name = year.instituteid.name;
                this.labels.push(year.y);
                this.intake.push(year.intake);
                this.enrolled.push(year.enrolled);
                this.passed.push(year.passed);
                this.placed.push(year.placed);
              }
              this.collegenames.push(this.name);
              this.datasets.push(new Dataset(this.intake, "Intake"));
              this.datasets.push(new Dataset(this.enrolled, "Enrolled"));
              this.datasets.push(new Dataset(this.passed, "Passed"));
              this.datasets.push(new Dataset(this.placed, "Placed"));
              this.colleges.push(new College(this.name, this.datasets, this.labels));
            }
            console.log(this.colleges);
            this.collegeData = true;
            this.checkForCollege();
          }
          else {
            console.log("NO SUCH COLLEGE");
          }
        }
      );
  }
  
  checkForCollege() {
    this.myForm.statusChanges.subscribe(
      () => {
        if (this.myForm.value.colleges !== "") {
          if (this.presentcollege !== "") {
            console.log("SOME COLLEGE");
            this.loadCanvas = false;
            this.loaded = false;
          }
          this.presentcollege = this.myForm.value.colleges;
          console.log(this.presentcollege);
          for (let college of this.colleges) {
            if (college.name === this.myForm.value.colleges) {
              console.log("found new college");
              this.load.initial(college.data, college.labels);
              this.loadCanvas = true;
              this.loadCollege();
            }
          }
        }
      }
    );
  }
  
  loadCollege() {
    if ((this.loadCanvas == true) && (this.loaded == false)) {
      this.barChartData = [];
      this.barChartLabels = [];
      console.log(this.barChartLabels);
      console.log(this.barChartData);
      this.barChartData = this.load.data();
      this.barChartLabels = this.load.labels();
      console.log("DO2");
      console.log(this.load.data());
      console.log(this.load.labels());
      this.loaded = true;
    }
    if ((this.barChartLabels.length !== 0) && (this.barChartData.length !== 0)) {
      console.log("LOADED");
      console.log(this.barChartLabels);
      console.log(this.barChartData);
      console.log(this.chart);
      if (this.chart && this.chart.chart && this.chart.chart.config) {
        this.chart.chart.config.data.labels = this.barChartLabels;
        this.chart.chart.update();
      }
    }
  }
  
  Reset() {
    this.labels = [];
    this.intake = [];
    this.enrolled = [];
    this.passed = [];
    this.placed = [];
    this.datasets = [];
  }
  
  hardReset() {
    this.barChartLegend = true;
    this.loaded= false;
    this.loadCanvas = false;
    this.collegeData = false;
    this.collegenames = [];
    this.presentcollege = "";
    this.Reset();
    this.colleges = [];
  }
  
}

