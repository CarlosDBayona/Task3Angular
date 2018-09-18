import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-click',
  templateUrl: './log-click.component.html',
  styleUrls: ['./log-click.component.css']
})
export class LogClickComponent implements OnInit {
  onClickText = true;
  listOfClicks = [];
  constructor() { }
  ngOnInit() {
  }
  changeClickStatus() {
    this.onClickText = !this.onClickText;
    this.listOfClicks.push(Date());
  }
}
