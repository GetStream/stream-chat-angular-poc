import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'thumbs-up-reaction-icon',
  templateUrl: './thumbs-up-reaction-icon.component.svg',
  styleUrls: ['./thumbs-up-reaction-icon.component.css']
})
export class ThumbsUpReactionIconComponent implements OnInit {
  fillColor = 'white';

  constructor() { }

  ngOnInit(): void {
  }

}
