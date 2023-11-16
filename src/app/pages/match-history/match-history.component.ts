import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-match-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './match-history.component.html',
  styleUrl: './match-history.component.css',
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [animate(1000)]),
    ]),
  ],
})
export class MatchHistoryComponent {

}
