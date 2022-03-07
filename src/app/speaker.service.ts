  import { Injectable } from '@angular/core';
import { Speaker } from './_models/speaker';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  private  speakers:Speaker[]=[
    {
          "_id":1,
          "address":"Mahalla"
          ,"government":"Garbia"
          ,"bdate":new Date(1997,3,1),
          "hour_rate":20,
          "image":"1.jpg",
          "isMarrid":false,
          "starRating":5,
          "name":"Ahmed El-Manzlawy"
        },
        {
          "_id":2,
          "address":"Alex"
          ,"government":"Alexandria"
          ,"bdate":new Date(1998,4,18),
          "hour_rate":10,
          "image":"6.jpg",
          "isMarrid":false,
          "starRating":3.5,
          "name":"Mohamed"
        }
  ]


  getAllSpeakers(){
    return this.speakers;
  }

  idCounter: number = 1;
  counterId() {
    return this.idCounter++;
    }

  getSpeakersById(id:number):Speaker{
    for (let i = 0; i < this.speakers.length; i++) {
      if(this.speakers[i]._id==id)
          return{
            _id:id,
            name:this.speakers[i].name,
            address:this.speakers[i].address,
            government:this.speakers[i].government,
            bdate:this.speakers[i].bdate,
            isMarrid:this.speakers[i].isMarrid,
            hour_rate:this.speakers[i].hour_rate,
            image:this.speakers[i].image,
            starRating:this.speakers[i].starRating
          }
    }
    return {
      "_id":this.idCounter,
      "address":'side Gaber',
      "government":'alex',
      "bdate":new Date(1997,3,1),
      "hour_rate":4,
      "image":"11.jpg",
      "isMarrid":false,
      "starRating":1,
      "name":'ibrahim'
    };
  }


  addSpeaker(newSpeaker:Speaker){
    this.speakers.push(newSpeaker);
  }

  delete(n:number){
    for (let i = 0; i < this.speakers.length; i++) {
      if(this.speakers[i]._id==n)
      {
        this.speakers.splice(i,1);
        return;
      }
  }
}


  constructor() { }
}
