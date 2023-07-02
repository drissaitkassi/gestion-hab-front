import {APP_INITIALIZER, NgModule} from '@angular/core';
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
  NbMenuModule, NbOptionModule, NbSelectModule, NbListModule, NbIconModule, NbButtonModule, NbTabsetModule, NbUserModule
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
import { AttachFileComponent } from './attach-file/attach-file.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {AuthGuard} from "./gurads/auth.guard";

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'gest-hab',
        clientId: 'gestion-hab',
      },
      initOptions: {
        onLoad: 'login-required',

      },
    });
}

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'initier-demande', component: InitDemandeComponent },
  { path: 'valider', component: ValiderDemandeComponent,canActivate:[AuthGuard],data:{roles:['INITIATEUR','VALIDATEUR']} },
  { path: 'approuver', component: ApprouverDemandeComponent,canActivate:[AuthGuard],data:{roles:['INITIATEUR','APPROBATEUR']} },
  { path: 'historique-demande', component: HistoriqueDemandeComponent },
  { path: 'historique-maj', component: HistoriqueMajComponent },
  { path: 'attach-file', component: AttachFileComponent },
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
    DashboardComponent,
    AttachFileComponent
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
    KeycloakAngularModule,
    RouterModule.forRoot(appRoutes,
      {enableTracing: true}),
    NbTabsetModule,
    NbStepperModule,
    NbUserModule

  ],
  providers: [    {
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService],
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
