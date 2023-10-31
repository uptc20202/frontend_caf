import { Component, Input, OnInit } from '@angular/core';
import { MotivationalQuotesService } from 'src/app/api/services/motivational-quotes.service';

@Component({
  selector: 'app-phrases',
  templateUrl: './phrases.component.html',
  styleUrls: ['./phrases.component.scss']
})

export class PhrasesComponent implements OnInit{
  @Input() gym_name: string = 'Nombre Gimnacio';

  motivationalQuote: string = '“La verdadera libertad es imposible sin una mente liberada por la disciplina.”';

  constructor(private quotesService: MotivationalQuotesService) {}

  ngOnInit() {
    this.getMotivationalQuote();
  }

  getMotivationalQuote() {
    this.quotesService.getMotivationalQuote().subscribe(
      (data: any) => {
        this.motivationalQuote = data.content;
      },
      (error: any) => {
        console.error('Error fetching motivational quote:', error);
      }
    );
  }
}
