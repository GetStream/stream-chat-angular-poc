import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'date-separator',
  templateUrl: './date-separator.component.html',
  styleUrls: ['./date-separator.component.scss']
})
export class DateSeparatorComponent implements OnInit {
  @Input() datetime: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
