import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IPerson } from '../../../model/person';

@Component({
  selector: 'app-full-name',
  templateUrl: './full-name.component.html',
  styleUrls: ['./full-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullNameComponent {
  @Input()
  person: IPerson;

  constructor() { }
}
