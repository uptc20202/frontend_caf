import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radiobtn',
  templateUrl: './radiobtn.component.html',
  styleUrls: ['./radiobtn.component.scss']
})
export class RadiobtnComponent {
  @Input() text: string = 'Ingresar';
}
