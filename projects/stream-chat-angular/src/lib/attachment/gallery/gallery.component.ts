import { Component, Input, OnInit } from '@angular/core';
import { Attachment } from 'stream-chat';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() images: Attachment[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log('this.images ', this.images)
  }
}
