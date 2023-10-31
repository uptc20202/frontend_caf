import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user_name: string = 'Nombre de usuario';
  @Input() old_user: string = '5 meses';
  @Input() name_workout: string = 'Nombre Plan de entrenamiento';
}
