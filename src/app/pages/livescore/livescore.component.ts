import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCallService } from '../../services/api-call.service';
import { MatchCardComponent } from '../../components/match-card/match-card.component';

@Component({
  selector: 'app-livescore',
  standalone: true,
  imports: [CommonModule,MatchCardComponent],
  templateUrl: './livescore.component.html',
  styleUrl: './livescore.component.css'
})
export class LivescoreComponent implements OnInit{

  liveMatches :any;
  constructor(private _api:ApiCallService){

  }
  ngOnInit(): void {
   this.loadLiveScore();
  }
  
  private loadLiveScore(){
    this._api.getLiveMatches().subscribe({
      next: data=>{
        console.log(data)
        this.liveMatches=data;
      },
      error:error=>{
        console.log(error)
      }
    })
  }

}
