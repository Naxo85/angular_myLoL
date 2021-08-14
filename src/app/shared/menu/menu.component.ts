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
        label: 'Options',
        items: [
          {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {},
          },
          {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {},
          },
        ],
      },
      {
        label: 'Navigate',
        items: [
          {
            label: 'Angular',
            icon: 'pi pi-external-link',
            url: 'http://angular.io',
          },
          // {
          //   label: 'Router',
          //   icon: 'pi pi-upload',
          //   routerLink: '/fileupload',
          // },
        ],
      },
    ];
  }
}
