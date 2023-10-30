import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-double-selection',
  templateUrl: './btn-double-selection.component.html',
  styleUrls: ['./btn-double-selection.component.scss']
})


export class BtnDoubleSelectionComponent {
  @Output() buttonClicked = new EventEmitter<string>();
  selectedButton: string | null = null;

  selectButton(button: string): void {
    this.selectedButton = button;
    this.buttonClicked.emit(button);
  }

  constructor(private router: Router) {}

  ngOnInit() {
    this.setButtonState();
    this.router.events.subscribe(() => {
      this.setButtonState();
    });
  }

  setButtonState(): void {
    const currentRoute = this.router.url;

    if (currentRoute === '/login') {
      this.selectButton('Ingreso');
    } else if (currentRoute === '/register') {
      this.selectButton('Registro');
    }
  }

}



