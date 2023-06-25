import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-init-demande',
  templateUrl: './init-demande.component.html',
  styleUrls: ['./init-demande.component.scss']
})
export class InitDemandeComponent implements OnInit {
  selectedItem: any;
  selectedItem2: any;
  fruits: string []=['banan','apple','orange','peaches','grnadeing','potatos'];

  constructor() { }

  ngOnInit(): void {
  }

}
