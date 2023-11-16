import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-match-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './match-card.component.html',
  styleUrl: './match-card.component.css',
})
export class MatchCardComponent {
  // public liveScoreDetails: boolean = false;
  // public showViewDetails: boolean = false;

@Input() match: any;
// onViewDetails(){
//   console.log("Enter view details")
//   this.liveScoreDetails=false;
//   this.showViewDetails=true;
// }
}
