import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { IPerson } from '../../../model/person';
import { Observable } from 'rxjs';
import { IEmployee } from '../../../model/employee';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from '../../../redux/app.state';
import { DeductionsActions } from '../../redux/deductions.actions';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-modify-employee',
  templateUrl: './modify-employee.component.html',
  styleUrls: ['./modify-employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModifyEmployeeComponent implements OnInit {
  dependents: FormArray;
  editForm: FormGroup;
  @select(state => state.deductionsState.deductionsPreview.employeeBeingEdited)
  employeeBeingEdited$: Observable<IEmployee>;

  constructor(private router: Router, private ngRedux: NgRedux<IAppState>, private deductionActions: DeductionsActions, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({});
    this.editForm.addControl('children', new FormArray([]));
    this.editForm.addControl('dependents', new FormArray([]));
    this.dependents = this.editForm.controls['dependents'] as FormArray;
  }

  cancel($event) {
    $event.preventDefault();
    this.router.navigate(['/deductions/preview/overview']);
  }

  addDependent($event) {
    $event.preventDefault();
    this.ngRedux.dispatch(this.deductionActions.addDependent());
  }

  removeDependent(index) {
    this.ngRedux.dispatch(this.deductionActions.removeDependent(index));
    this.dependents.at(index).clearValidators();
    this.dependents.removeAt(index);
  }
}
