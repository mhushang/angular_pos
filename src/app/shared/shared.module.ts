import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    exports: [
        CommonModule,
        NgbModule,
    ],
    imports: [
        RouterModule,
        CommonModule,
        NgbModule,
    ],
    declarations: []
})

export class SharedModule { }
