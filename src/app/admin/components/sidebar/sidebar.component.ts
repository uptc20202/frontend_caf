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
  @Output() buttonView = new EventEmitter<string>();

  constructor(private router: Router) {}

  isCollapsed: boolean = true;
  selectedButton: string | null = null;

  toggleCollapse() {
  this.isCollapsed = !this.isCollapsed;
  this.buttonClicked.emit(this.isCollapsed);
  }

  selectButton(button: string): void {
    this.selectedButton = button;
    this.buttonView.emit(button);
  }

}
