import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-money-amount',
  templateUrl: './money-amount.component.html',
  styleUrls: ['./money-amount.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoneyAmountComponent {
  @Input()
  label: string;

  @Input()
  amount: number;

  constructor() { }
}
