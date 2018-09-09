import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IDeductionsPreview } from '../../../model/deductions-preview';

@Component({
  selector: 'app-total-footer',
  templateUrl: './total-footer.component.html',
  styleUrls: ['./total-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TotalFooterComponent {
  @Input()
  deductionsPreview: IDeductionsPreview;

  constructor() { }
}
