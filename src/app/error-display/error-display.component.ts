import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
