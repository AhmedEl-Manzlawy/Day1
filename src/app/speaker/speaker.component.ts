import { Component, OnInit } from '@angular/core';
import { Speaker } from '../_models/speaker';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.css']
})
export class SpeakerComponent implements OnInit {
  idCounter: number = 1;
  title:string='Speaker List';
  searchValue:string ='';//for filter
  counterId() {
    return this.idCounter++;
  }
  speaker:Speaker={
    "_id":this.idCounter,
    "address":'side Gaber',
    "government":'alex',
    "bdate":new Date(1997,3,1),
    "hour_rate":4,
    "image":"11.jpg",
    "isMarrid":false,
    "starRating":1,
    "name":'ibrahim'
  }


  speakers:Speaker[]=
   [];//test
  // [
  //   {
  //     "_id":1,
  //     "address":"Mahalla"
  //     ,"government":"Garbia"
  //     ,"bdate":new Date(1997,3,1),
  //     "hour_rate":20,
  //     "image":"1.jpg",
  //     "isMarrid":false,
  //     "starRating":5,
  //     "name":"Ahmed El-Manzlawy"
  //   },
  //   {
  //     "_id":2,
  //     "address":"Alex"
  //     ,"government":"Alexandria"
  //     ,"bdate":new Date(1998,4,18),
  //     "hour_rate":10,
  //     "image":"6.jpg",
  //     "isMarrid":false,
  //     "starRating":3.5,
  //     "name":"Mohamed"
  //   }
  // ];//test
  addSpeaker() {
    this.speaker._id = this.counterId();
    this.speakers.push({_id:this.speaker._id,
                        name:this.speaker.name,
                        address:this.speaker.address,
                        government:this.speaker.government,
                        bdate:this.speaker.bdate,
                        isMarrid:this.speaker.isMarrid,
                        hour_rate:this.speaker.hour_rate,
                        image:this.speaker.image,
                        starRating:this.speaker.starRating
                        });
  }
  delete(n:number){
    for (let index = 0; index < this.speakers.length; index++) {
      if(this.speakers[index]._id==n)
      {
        this.speakers.splice(index,1);
        return;
      }
  }
}
isUpdated:boolean =false;
updateIndex: number = -1;
  update(n:number){
    this.isUpdated = !this.isUpdated;
    for (let index = 0; index < this.speakers.length; index++) {
      if (this.speakers[index]._id ==n) {
        this.updateIndex = index;
        this.speaker = Object.assign({}, this.speakers[index]);
      }
    }
  }

  updateSpeaker() {
    this.speakers[this.updateIndex] = this.speaker;
    this.isUpdated = false;
  }

  cancel() {
    this.isUpdated = false;

    this.speaker = {
    "_id":this.idCounter,
    "address":'mansoura',
    "government":'Dakahlia',
    "bdate":new Date(1995,7,20),
    "hour_rate":10,
    "image":"8.jpg",
    "isMarrid":true,
    "starRating":5,
    "name":'ayman'
    };
  }
  showImage = false;
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  speakerDetails:Speaker=this.speakers[0];
  showDetails(n:Speaker){
    this.speakerDetails = n;
  }
  isEditable = false;
  isClicked=true;
  constructor() { }

  ngOnInit(): void {
  }

}
