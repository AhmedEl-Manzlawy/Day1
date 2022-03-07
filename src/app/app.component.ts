 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day1';
  num=1;

  syntax:string="Stars Number";

  myFun(n:number){
    this.syntax="star Clicked :"+" "+ n;
  }
}
