import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbStepperModule,
  NbSidebarModule,
  NbCardModule,
  NbMenuModule, NbOptionModule, NbSelectModule, NbListModule, NbIconModule, NbButtonModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { InitDemandeComponent } from './init-demande/init-demande.component';
import {RouterModule, Routes} from "@angular/router";
import { ValiderDemandeComponent } from './valider-demande/valider-demande.component';
import { ApprouverDemandeComponent } from './approuver-demande/approuver-demande.component';
import { HistoriqueDemandeComponent } from './historique-demande/historique-demande.component';
import { HistoriqueMajComponent } from './historique-maj/historique-maj.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'initier-demande', component: InitDemandeComponent },
  { path: 'valider', component: ValiderDemandeComponent },
  { path: 'approuver', component: ApprouverDemandeComponent },
  { path: 'historique-demande', component: HistoriqueDemandeComponent },
  { path: 'historique-maj', component: HistoriqueMajComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutPageComponent,
    SideMenuComponent,
    InitDemandeComponent,
    ValiderDemandeComponent,
    ApprouverDemandeComponent,
    HistoriqueDemandeComponent,
    HistoriqueMajComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'corporate'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbCardModule,
    NbMenuModule.forRoot(),
    NbOptionModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    BrowserModule,
    RouterModule.forRoot( appRoutes,
      { enableTracing: true } )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
