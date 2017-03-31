import { NgModule } from '@angular/core';
import {SharedModule} from "../../Shared/shared.module";

import { bureausRouting } from "./bureaus.routing";
import {AdminbComponent} from "./adminb.component";
import { AdminbStartComponent } from './adminb-start.component';


@NgModule({
    imports: [bureausRouting, SharedModule],
    exports: [],
    declarations: [AdminbComponent, AdminbStartComponent],
    providers: [],
})
export class BureausModule { }

