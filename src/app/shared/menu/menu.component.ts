import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor() {}

  items: MenuItem[] = [];
  hideMenu: boolean = true;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Games',
        items: [
          {
            label: 'History',
            icon: 'pi pi-book',
            routerLink: 'history',
          },
        ],
      },
      {
        label: 'Champions',
        items: [
          {
            label: 'Played',
            icon: 'pi pi-star',
            routerLink: 'played',
          },
          {
            label: 'Rotation',
            icon: 'pi pi-refresh',
            routerLink: 'rotation',
          },
        ],
      },
    ];
  }
}
