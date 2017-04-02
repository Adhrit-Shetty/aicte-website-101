import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {FacComponent} from "./About Us/fac.component";
import {RegoffComponent} from "./About Us/regoff.component";
import {AcadbComponent} from "./Bureaus/acadb.component";
import {AppbComponent} from "./Bureaus/appb.component";
import {FinbComponent} from "./Bureaus/finb.component";
import {PcbComponent} from "./Bureaus/pcb.component";
import {PquesComponent} from "./Bureaus/pques.component";
import {RifdComponent} from "./Bureaus/rifd.component";
import {AntiragComponent} from "./Grievance/antirag.component";
import {CvcComponent} from "./Grievance/cvc.component";
import {PubgrievComponent} from "./Grievance/pubgriev.component";
import {RtiComponent} from "./Grievance/rti.component";
import {ScstcellComponent} from "./Grievance/scstcell.component";
import {AdvertisementComponent} from "./Bulletin/advertisement.component";
import {CircularsComponent} from "./Bulletin/circulars.component";
import {JobsComponent} from "./Bulletin/jobs.component";
import {NewsletterComponent} from "./Bulletin/newsletter.component";
import {PhotogalleryComponent} from "./Bulletin/photogallery.component";
import {StartuppolicyComponent} from "./Bulletin/startuppolicy.component";
import {TendersComponent} from "./Bulletin/tenders.component";
import {AnnualreportComponent} from "./Reports/annualreport.component";
import {CommitteereportComponent} from "./Reports/committeereport.component";
import {KnowledgecommissionreportComponent} from "./Reports/knowledgecommissionreport.component";
import {RusaComponent} from "./Reports/rusa.component";
import {SarvasaComponent} from "./Reports/sarvasa.component";
import {AdmissionsComponent} from "./Students/admissions.component";
import {AwardsComponent} from "./Students/awards.component";
import {EthicsComponent} from "./Students/ethics.component";
import {FacilitiesfdaComponent} from "./Students/facilitiesfda.component";
import {FacilitiesfgComponent} from "./Students/facilitiesfg.component";
import {LoansComponent} from "./Students/loans.component";
import {PlacementsComponent} from "./Students/placements.component";
import {ResearchfundsComponent} from "./Students/researchfunds.component";
import {ScholarshipsComponent} from "./Students/scholarships.component";
import {WtbaeComponent} from "./Students/wtbae.component";
import {CollaborationsComponent} from "./Education/collaborations.component";
import {CommunitycollegesComponent} from "./Education/communitycolleges.component";
import {DistanceeducationComponent} from "./Education/distanceeducation.component";
import {EducationalnetworkComponent} from "./Education/educationalnetwork.component";
import {FinishingschoolsComponent} from "./Education/finishingschools.component";
import {InstinindiaComponent} from "./Education/instinindia.component";
import {LibraryservicesComponent} from "./Education/libraryservices.component";
import {MobileeducationComponent} from "./Education/mobileeducation.component";
import {ModelsyllabusComponent} from "./Education/modelsyllabus.component";
import {ProjectfactoryComponent} from "./Education/projectfactory.component";
import {VocationaleducationComponent} from "./Education/vocationaleducation.component";
import {DashboardComponent} from "./Dashboard/dashboard.component";
import {LoginComponent} from "./Login/login.component";
import {StudentComponent} from "./User Shortcuts/student.component";
import {CollegeComponent} from "./User Shortcuts/college.component";
import {EmployeeComponent} from "./User Shortcuts/employee.component";


const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'aboutAICTE', loadChildren: 'app/About Us/About AICTE/aboutus.module#AboutusModule'},
  {path: 'faculty', component: FacComponent},
  {path: 'regional_office', component: RegoffComponent},
  {path: 'administration_bureau', loadChildren: 'app/Bureaus/Administration Bureau/bureaus.module#BureausModule'},
  {path: 'academic_bureau', component: AcadbComponent},
  {path: 'approvals_bureau', component: AppbComponent},
  {path: 'finance_bureau', component: FinbComponent},
  {path: 'planning_and_coordination_bureau', component: PcbComponent},
  {path: 'parliament_questions', component: PquesComponent},
  {path: 'rifd', component: RifdComponent},
  {path: 'anti_ragging', component: AntiragComponent},
  {path: 'central_vigilance_commission', component: CvcComponent},
  {path: 'public_grievance', component: PubgrievComponent},
  {path: 'right_to_information', component: RtiComponent},
  {path: 'sc_st_cell', component: ScstcellComponent},
  {path: 'advertisement', component: AdvertisementComponent},
  {path: 'circulars', component: CircularsComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'news_letter', component: NewsletterComponent},
  {path: 'photo_gallery', component: PhotogalleryComponent},
  {path: 'startup_policy', component: StartuppolicyComponent},
  {path: 'tenders', component: TendersComponent},
  {path: 'annual_report', component: AnnualreportComponent},
  {path: 'committee_report', component: CommitteereportComponent},
  {path: 'knowledge_commission_report', component: KnowledgecommissionreportComponent},
  {path: 'rusa', component: RusaComponent},
  {path: 'sarva_shiksha_abhiyan', component: SarvasaComponent},
  {path: 'admissions', component: AdmissionsComponent},
  {path: 'awards', component: AwardsComponent},
  {path: 'ethics', component: EthicsComponent},
  {path: 'facilities_for_differently_abled', component: FacilitiesfdaComponent},
  {path: 'facilities_for_girls', component: FacilitiesfgComponent},
  {path: 'loans', component: LoansComponent},
  {path: 'placements', component: PlacementsComponent},
  {path: 'research_funds', component: ResearchfundsComponent},
  {path: 'scholarships', component: ScholarshipsComponent},
  {path: 'want_to_be_an_entrepreneur', component: WtbaeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'use_of_ict', loadChildren: 'app/Education/Use of ICT/education.module#EducationModule'},
  {path: 'collaborations', component: CollaborationsComponent},
  {path: 'community_colleges', component: CommunitycollegesComponent},
  {path: 'distance_education', component: DistanceeducationComponent},
  {path: 'educational_network', component: EducationalnetworkComponent},
  {path: 'finishing_schools', component: FinishingschoolsComponent},
  {path: 'institutions_in_india', component: InstinindiaComponent},
  {path: 'library_services', component: LibraryservicesComponent},
  {path: 'mobile_education', component: MobileeducationComponent},
  {path: 'model_syllabus', component: ModelsyllabusComponent},
  {path: 'project_factory', component: ProjectfactoryComponent},
  {path: 'vocational_education', component: VocationaleducationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/administrator_page', loadChildren: 'app/Login/Administrator/login.module#LoginModule'},
  {path: 'student', component: StudentComponent},
  {path: 'college', component: CollegeComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
