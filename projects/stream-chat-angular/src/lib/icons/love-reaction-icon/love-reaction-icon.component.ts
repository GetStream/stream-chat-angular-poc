import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'love-reaction-icon',
  templateUrl: './love-reaction-icon.component.svg',
  styleUrls: ['./love-reaction-icon.component.css']
})
export class LoveReactionIconComponent implements OnInit {
  fillColor = 'white';

  constructor() { }

  ngOnInit(): void {
  }

}
