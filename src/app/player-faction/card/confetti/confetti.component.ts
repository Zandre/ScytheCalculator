import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'confetti',
  templateUrl: './confetti.component.html',
  styleUrls: ['./confetti.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfettiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
