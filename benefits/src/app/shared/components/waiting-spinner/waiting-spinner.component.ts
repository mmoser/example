import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-waiting-spinner',
  templateUrl: './waiting-spinner.component.html',
  styleUrls: ['./waiting-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WaitingSpinnerComponent {
  @Input()
  show: boolean;

  constructor() { }
}
