import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { menuItems } from './pages-menu';
import { NbMenuItem   } from '@nebular/theme';


@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  templateUrl: './pages.component.html',
})
export class PagesComponent {
[x: string]: any;

  menu = menuItems;
}
