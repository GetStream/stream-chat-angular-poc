import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lol-reaction-icon',
  templateUrl: './lol-reaction-icon.component.svg',
  styleUrls: ['./lol-reaction-icon.component.css']
})
export class LolReactionIconComponent implements OnInit {
  fillColor = 'white';

  constructor() { }

  ngOnInit(): void {
  }

}
