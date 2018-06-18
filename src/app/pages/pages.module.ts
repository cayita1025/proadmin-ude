import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

//////// ModuloShared
import { SharedModule } from '../shared/shared.module';

import {FormsModule } from '@angular/forms';

// ng2- charts
import { ChartsModule } from 'ng2-charts';



import { PagesComponent } from './pages.component';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';


///// Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

///// Temporal2
import { GraficodonaComponent } from '../components/graficodona/graficodona.component';


@NgModule ({
    declarations: [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        IncrementadorComponent,
        GraficodonaComponent
    ],
    exports: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})
export class PagesModule  { }
