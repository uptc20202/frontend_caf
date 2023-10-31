import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-workouts-card',
  templateUrl: './workouts-card.component.html',
  styleUrls: ['./workouts-card.component.scss']
})

export class WorkoutsCardComponent {
  @Input() workout_name: string = 'Nombre Plan De entrenamiento';
  @Input() id_workout: string = 'Id Plan de entrenamiento ';
}
