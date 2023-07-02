import { Component, OnInit } from '@angular/core';
import {NbMenuItem} from "@nebular/theme";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss']
})
export class LayoutPageComponent implements OnInit {
  constructor(public keycloak:KeycloakService) {
  }


  ngOnInit(): void {
  }

  handleLogout() {

  }
}



