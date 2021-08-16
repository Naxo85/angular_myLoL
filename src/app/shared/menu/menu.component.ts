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
        label: 'My data',
      },
      {
        label: 'My Champions',
        items: [
          {
            label: 'By Mastery',
            icon: 'pi pi-star',
            routerLink: '',
            command: () => {},
          },
          {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {},
          },
        ],
      },
    ];
  }
}
