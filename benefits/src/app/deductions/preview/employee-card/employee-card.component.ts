import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IEmployeeCost } from '../../../model/employee-cost';
import { IAppState } from '../../../redux/app.state';
import { DeductionsActions } from '../../redux/deductions.actions';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeCardComponent {
  @Input()
  employeeCost: IEmployeeCost;

  constructor(private ngRedux: NgRedux<IAppState>, private deductionActions: DeductionsActions) { }

  remove($event) {
    $event.preventDefault();
    this.ngRedux.dispatch(this.deductionActions.removeEmployeeRequested(this.employeeCost));
  }

  edit($event) {
    $event.preventDefault();
    this.ngRedux.dispatch(this.deductionActions.editEmployee(this.employeeCost.employee));
  }
}
