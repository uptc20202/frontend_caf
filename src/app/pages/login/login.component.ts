import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  selectedButton: string = '';

  toggleForms(button: string): void {
    this.selectedButton = button;
  }
}
