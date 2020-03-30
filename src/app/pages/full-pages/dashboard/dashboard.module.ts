import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        DashboardRoutingModule,
    ],
    declarations: [
        DashboardComponent,
    ],
    providers: []
})
export class DashboardModule { }
