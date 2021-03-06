import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {FreePlayPage} from './free-play.page';
import {FivCenterModule, FivIconModule} from '@fivethree/core';

const routes: Routes = [
    {
        path: '',
        component: FreePlayPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        FivIconModule,
        FivCenterModule,
    ],
    declarations: [FreePlayPage]
})
export class FreePlayPageModule {
}
