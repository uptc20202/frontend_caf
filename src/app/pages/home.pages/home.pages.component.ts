import { Component } from '@angular/core';

@Component({
  selector: 'app-home.pages',
  templateUrl: './home.pages.component.html',
  styleUrls: ['./home.pages.component.scss']
})
export class HomePagesComponent {

  dashboardWidth: string = '96%';
  sidebarWidth: string = '4%';

  toggleCollapse(isCollapsed: boolean) {
    this.dashboardWidth = isCollapsed ? '96%' : '85%';
    this.sidebarWidth = isCollapsed ? '4%' : '15%';
  }

}
