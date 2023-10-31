import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() gym_name: string = 'Nombre Gimnacio';
  @Input() gym_email: string = 'email.gym@email.com';

  @Output() buttonClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  isCollapsed: boolean = true;

  toggleCollapse() {
  this.isCollapsed = !this.isCollapsed;
  this.buttonClicked.emit(this.isCollapsed);
  }

}
