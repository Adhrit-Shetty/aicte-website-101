import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import {AppComponent} from './app.component';
import {HomeComponent} from './home.component';
import {NavhomeComponent} from './navhome.component';
import {routing} from './app.routing';
import {RouterModule} from "@angular/router";

import {RegoffComponent} from './About Us/regoff.component';
import {FacComponent} from './About Us/fac.component';
import {AcadbComponent} from './Bureaus/acadb.component';
import {PquesComponent} from './Bureaus/pques.component';
import {FinbComponent} from './Bureaus/finb.component';
import {AppbComponent} from './Bureaus/appb.component';
import {PcbComponent} from './Bureaus/pcb.component';
import {RifdComponent} from './Bureaus/rifd.component';
import {AntiragComponent} from './Grievance/antirag.component';
import {RtiComponent} from './Grievance/rti.component';
import {CvcComponent} from './Grievance/cvc.component';
import {PubgrievComponent} from './Grievance/pubgriev.component';
import {ScstcellComponent} from './Grievance/scstcell.component';
import {AdvertisementComponent} from './Bulletin/advertisement.component';
import {StartuppolicyComponent} from './Bulletin/startuppolicy.component';
import {JobsComponent} from './Bulletin/jobs.component';
import {CircularsComponent} from './Bulletin/circulars.component';
import {TendersComponent} from './Bulletin/tenders.component';
import {NewsletterComponent} from './Bulletin/newsletter.component';
import {PhotogalleryComponent} from './Bulletin/photogallery.component';
import {AnnualreportComponent} from './Reports/annualreport.component';
import {CommitteereportComponent} from './Reports/committeereport.component';
import {KnowledgecommissionreportComponent} from './Reports/knowledgecommissionreport.component';
import {SarvasaComponent} from './Reports/sarvasa.component';
import {RusaComponent} from './Reports/rusa.component';
import {AdmissionsComponent} from './Students/admissions.component';
import {ScholarshipsComponent} from './Students/scholarships.component';
import {AwardsComponent} from './Students/awards.component';
import {EthicsComponent} from './Students/ethics.component';
import {LoansComponent} from './Students/loans.component';
import {FacilitiesfdaComponent} from './Students/facilitiesfda.component';
import {FacilitiesfgComponent} from './Students/facilitiesfg.component';
import {PlacementsComponent} from './Students/placements.component';
import {WtbaeComponent} from './Students/wtbae.component';
import {ResearchfundsComponent} from './Students/researchfunds.component';
import {EducationalnetworkComponent} from './Education/educationalnetwork.component';
import {CollaborationsComponent} from './Education/collaborations.component';
import {MobileeducationComponent} from './Education/mobileeducation.component';
import {FinishingschoolsComponent} from './Education/finishingschools.component';
import {VocationaleducationComponent} from './Education/vocationaleducation.component';
import {CommunitycollegesComponent} from './Education/communitycolleges.component';
import {DistanceeducationComponent} from './Education/distanceeducation.component';
import {InstinindiaComponent} from './Education/instinindia.component';
import {ModelsyllabusComponent} from './Education/modelsyllabus.component';
import {LibraryservicesComponent} from './Education/libraryservices.component';
import {ProjectfactoryComponent} from './Education/projectfactory.component';
import {DashboardComponent} from "./Dashboard/dashboard.component";
import {ChartsModule} from "ng2-charts";
import {SharedModule} from "./Shared/shared.module";
import { LoginComponent } from './Login/login.component';
import { AuthService } from "./Shared/Services/auth.service";
import { AuthGuard } from "./Shared/Services/auth.guard";
import { LocalStorageModule } from "angular-2-local-storage";
import { StudentComponent } from './User Shortcuts/student.component';
import { CollegeComponent } from './User Shortcuts/college.component';
import { EmployeeComponent } from './User Shortcuts/employee.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavhomeComponent,
    RegoffComponent,
    FacComponent,
    AcadbComponent,
    PquesComponent,
    FinbComponent,
    AppbComponent,
    PcbComponent,
    RifdComponent,
    AntiragComponent,
    RtiComponent,
    CvcComponent,
    PubgrievComponent,
    ScstcellComponent,
    AdvertisementComponent,
    StartuppolicyComponent,
    JobsComponent,
    CircularsComponent,
    TendersComponent,
    NewsletterComponent,
    PhotogalleryComponent,
    AnnualreportComponent,
    CommitteereportComponent,
    KnowledgecommissionreportComponent,
    SarvasaComponent,
    RusaComponent,
    AdmissionsComponent,
    ScholarshipsComponent,
    AwardsComponent,
    EthicsComponent,
    LoansComponent,
    FacilitiesfdaComponent,
    FacilitiesfgComponent,
    PlacementsComponent,
    WtbaeComponent,
    ResearchfundsComponent,
    EducationalnetworkComponent,
    CollaborationsComponent,
    MobileeducationComponent,
    FinishingschoolsComponent,
    VocationaleducationComponent,
    CommunitycollegesComponent,
    DistanceeducationComponent,
    InstinindiaComponent,
    ModelsyllabusComponent,
    LibraryservicesComponent,
    ProjectfactoryComponent,
    DashboardComponent,
    LoginComponent,
    StudentComponent,
    CollegeComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ChartsModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    LocalStorageModule.withConfig({
      prefix: 'aicte-app',
      storageType: 'localStorage'
    })
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
