import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.css']
})
export class SpeakerDetailsComponent implements OnInit , OnChanges {

  @Input() speakers:Speaker={
    "_id":1,
    "address":'',
    "government":'Dakahlia',
    "bdate":new Date(1995,7,20),
    "hour_rate":10,
    "image":"8.jpg",
    "isMarrid":true,
    "starRating":5,
    "name":'ayman'
  }
  pageTitle='Speaker Details';
  // speakers:Speaker;
  constructor( public speakersService:SpeakerService) { }
  ngOnChanges(changes: SimpleChanges): void {
    // this.speakers = this.speakersService.getSpeakersById
  }

  ngOnInit(): void {
  }

}
