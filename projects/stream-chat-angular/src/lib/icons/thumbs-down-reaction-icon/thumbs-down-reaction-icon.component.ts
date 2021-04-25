import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'thumbs-down-reaction-icon',
  templateUrl: './thumbs-down-reaction-icon.component.svg',
  styleUrls: ['./thumbs-down-reaction-icon.component.css']
})
export class ThumbsDownReactionIconComponent implements OnInit {
  fillColor = 'white';

  constructor() { }

  ngOnInit(): void {
  }

}
