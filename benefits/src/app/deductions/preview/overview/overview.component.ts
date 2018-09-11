import { Component, OnInit, ChangeDetectionStrategy, ViewChild, OnDestroy } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { IEmployeeCost } from '../../../model/employee-cost';
import { IDeductionsPreview } from '../../../model/deductions-preview';
import { DeleteConfirmationModalComponent } from '../../../shared/components/delete-confirmation-modal/delete-confirmation-modal.component';
import { IAppState } from '../../../redux/app.state';
import { DeductionsActions } from '../../redux/deductions.actions';
import { initialDeductionsState } from '../../redux/deductions.state';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewComponent implements OnInit, OnDestroy {

  @select(state => state.deductionsState.deductionsPreview.employeeCosts)
  employeeCosts$: Observable<Array<IEmployeeCost>>;

  @select(state => state.deductionsState.deductionsPreview)
  deductionsPreview$: Observable<IDeductionsPreview>;

  @ViewChild('deleteModal')
  deleteConfirmationModal: DeleteConfirmationModalComponent;

  @select(state => state.deductionsState.deductionsPreview.employeeToBeDeleted)
  employeeToBeDeleted$: Observable<IEmployeeCost>;

  employeeToBeDeletedSubscription;
  title: string;
  text: string;

  constructor(private ngRedux: NgRedux<IAppState>, private deductionActions: DeductionsActions) { }

  ngOnInit() {
    this.employeeToBeDeletedSubscription = this.employeeToBeDeleted$.subscribe(x => {
      if (!!x) {
        const fullName = `${x.employee.firstName} ${x.employee.lastName}`;
        this.title = `Confirm Removal of ${fullName}`;
        this.text = `Are you sure you want to remove ${fullName}?`;
        this.deleteConfirmationModal.show();
      }
    });
  }

  ngOnDestroy(): void {
    this.employeeToBeDeletedSubscription.unsubscribe();
  }

  deleteConfirmed(confirmed: boolean) {
    this.ngRedux.dispatch(confirmed ? this.deductionActions.removeEmployeeConfirmed() : this.deductionActions.removeEmployeeCancelled());
  }

  addEmployee(event$) {
    event$.preventDefault();
    this.ngRedux.dispatch(this.deductionActions.addEmployee(initialDeductionsState.deductionsPreview.employeeBeingEdited));
  }
}
