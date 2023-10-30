import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent {
  @Input() text: string = 'hola';
  @Input() padding: string = "10px";
  @Input() size: number = 0;

  inputText: string = '';

  clearInput(): void {
    this.inputText = '';
  }
}
