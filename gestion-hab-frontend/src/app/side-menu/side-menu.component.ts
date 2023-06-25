import { Component, OnInit } from '@angular/core';
import {NbMenuItem, NbMenuService} from "@nebular/theme";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {


  constructor(private menuService: NbMenuService) { }

  ngOnInit(): void {
  }

  items: NbMenuItem[] = [
    {
      title: 'Tableau de  Bord',
      icon: 'activity-outline',

    },
    {
      title: 'Initier Demande',
      icon: 'file-text-outline',
      url:'initier-demande'
    },
    {
      title: 'Demandes à Approuver',
      icon: 'checkmark-circle-2-outline',
    },
    {
      title: 'Demandes à Valider',
      icon: { icon: 'checkmark-outline', pack: 'eva' },
    },
    {
      title: 'Historique des Demandes',
      icon: 'clock-outline',
    },
    {
      title: 'Historique Mise a jours',
      icon: 'flip-outline',
    }

  ];

}
