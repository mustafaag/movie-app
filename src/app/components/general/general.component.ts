import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Title of app component';
  imageUrl='./../assets/img/best-boat-movies.png'
  today = new Date();
  sellingPrice = 50;

  attributeValue = "movies-app";
  isSampleApplied = true;
  multipleClasses = 'black-bg white-cl'

  setTimeToNow () {
    this.today = new Date();
  }
  pColor = '';
  setColor (_color: string) {
    console.log(_color);
    this.pColor = _color;
  }

}
